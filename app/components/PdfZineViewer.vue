<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import { PageFlip } from 'page-flip'
import { useT } from '~/i18n/ui'

const t = useT()

const props = defineProps<{
  pdfUrl: string
  title: string
}>()

const emit = defineEmits<{ close: [] }>()

const loading = ref(true)
const loadingMore = ref(false)
const error = ref('')
const loadedPages = ref(0)
const totalPages = ref(0)
const progressPercent = ref(0)
const bookRef = ref<HTMLElement | null>(null)
const modalRef = ref<HTMLElement | null>(null)
let pageFlip: PageFlip | null = null

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).href

async function renderPageImage(pdf: pdfjsLib.PDFDocumentProxy, i: number): Promise<string> {
  const page = await pdf.getPage(i)
  const viewport = page.getViewport({ scale: 1.5 })
  const canvas = document.createElement('canvas')
  canvas.width = viewport.width
  canvas.height = viewport.height
  const ctx = canvas.getContext('2d')!
  await page.render({ canvas, canvasContext: ctx, viewport }).promise
  return canvas.toDataURL('image/jpeg', 0.85)
}

async function renderPdf() {
  pageFlip?.destroy()
  pageFlip = null
  loading.value = true
  loadingMore.value = false
  error.value = ''
  loadedPages.value = 0
  totalPages.value = 0
  progressPercent.value = 0

  try {
    const pdf = await pdfjsLib.getDocument({ url: props.pdfUrl }).promise
    totalPages.value = pdf.numPages

    // Render just the first page and open the flipbook right away, instead
    // of blocking on every page — the rest stream in behind the scenes.
    const firstImage = await renderPageImage(pdf, 1)
    loadedPages.value = 1
    progressPercent.value = Math.round((1 / pdf.numPages) * 100)

    await nextTick()
    initFlipbook([firstImage])
    loading.value = false

    if (pdf.numPages > 1) {
      loadingMore.value = true
      for (let i = 2; i <= pdf.numPages; i++) {
        const src = await renderPageImage(pdf, i)
        appendPage(src)
        pageFlip?.updateFromHtml(document.querySelectorAll('.flip-page'))
        loadedPages.value = i
        progressPercent.value = Math.round((i / pdf.numPages) * 100)
      }
      loadingMore.value = false
    }
  } catch (e) {
    error.value = t.value.pdfViewer.error
    console.error(e)
    loading.value = false
  }
}

function appendPage(src: string) {
  if (!bookRef.value) return
  const page = document.createElement('div')
  page.className = 'flip-page'
  const img = document.createElement('img')
  img.src = src
  img.alt = t.value.pdfViewer.pageAlt
  page.appendChild(img)
  bookRef.value.appendChild(page)
}

function initFlipbook(images: string[]) {
  if (!bookRef.value || images.length === 0) return

  bookRef.value.innerHTML = ''
  images.forEach(appendPage)

  // A4 portrait ratio (height / width)
  const A4_RATIO = 1.4142
  // reserve room for the modal header, controls and hint text so they stay visible
  const chromeHeight = 150
  // reserve room for the modal's own horizontal padding so the right page never gets clipped
  const modalHorizontalPadding = 40
  const maxContainerWidth = window.innerWidth - modalHorizontalPadding
  const maxContainerHeight = window.innerHeight - chromeHeight
  const isDoublePage = maxContainerWidth / 2 >= 400

  let pageWidth = isDoublePage ? maxContainerWidth / 2 : maxContainerWidth
  let pageHeight = pageWidth * A4_RATIO
  if (pageHeight > maxContainerHeight) {
    pageHeight = maxContainerHeight
    pageWidth = pageHeight / A4_RATIO
  }

  // the book's internal wrapper is positioned absolutely, so the flip-book
  // container needs an explicit size or the modal won't size around it correctly
  bookRef.value.style.width = `${pageWidth * (isDoublePage ? 2 : 1)}px`
  bookRef.value.style.height = `${pageHeight}px`

  pageFlip = new PageFlip(bookRef.value, {
    width: pageWidth,
    height: pageHeight,
    size: 'fixed',
    minWidth: 200,
    maxWidth: 1600,
    minHeight: 280,
    maxHeight: 2200,
    showCover: true,
    usePortrait: !isDoublePage,
    mobileScrollSupport: false,
  })

  pageFlip.loadFromHTML(document.querySelectorAll('.flip-page'))
}

function prevPage() {
  pageFlip?.flipPrev()
}

function nextPage() {
  pageFlip?.flipNext()
}

onMounted(renderPdf)

onUnmounted(() => {
  pageFlip?.destroy()
})

watch(() => props.pdfUrl, renderPdf)
</script>

<template>
  <div class="zine-overlay" @click.self="emit('close')">
    <div class="zine-modal">
      <header class="zine-header">
        <h3>{{ title }}</h3>
        <button class="close-btn" :aria-label="t.pdfViewer.closeAria" @click="emit('close')">✕</button>
      </header>

      <div v-if="loading" class="zine-status">
        <div class="zine-progress-track">
          <div class="zine-progress-fill" :style="{ width: `${progressPercent}%` }" />
        </div>
        <p class="zine-progress-label">
          {{ totalPages > 0 ? t.pdfViewer.loadingPage(loadedPages, totalPages, progressPercent) : t.pdfViewer.opening }}
        </p>
      </div>
      <div v-else-if="error" class="zine-status error">{{ error }}</div>

      <div v-show="!loading && !error" class="zine-body">
        <div ref="bookRef" class="flip-book" />
        <div class="zine-controls">
          <button @click="prevPage">{{ t.pdfViewer.prev }}</button>
          <button @click="nextPage">{{ t.pdfViewer.next }}</button>
        </div>
        <p class="zine-hint">{{ t.pdfViewer.hint }}</p>
        <p v-if="loadingMore" class="zine-hint zine-loading-more">
          {{ t.pdfViewer.loadingPage(loadedPages, totalPages, progressPercent) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zine-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.zine-modal {
  background: #2a2a2a;
  border-radius: 16px;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  padding: 1rem 1.25rem;
}

.zine-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #fff;
}

.zine-header h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
}

.close-btn {
  color: #aaa;
  font-size: 1.25rem;
  padding: 0.6rem 0.75rem;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #fff;
}

.zine-status {
  color: #ccc;
  text-align: center;
  padding: 3rem;
  width: min(90vw, 360px);
}

.zine-status.error {
  color: #f88;
  width: auto;
}

.zine-progress-track {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.zine-progress-fill {
  height: 100%;
  border-radius: 999px;
  background: #d99a35;
  transition: width 0.2s ease;
}

.zine-progress-label {
  margin-top: 0.85rem;
  font-size: 0.85rem;
  color: #ccc;
}

.zine-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flip-book {
  margin: 0 auto;
}

.flip-book :deep(.flip-page) {
  background: #fff;
}

.flip-book :deep(.flip-page img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.zine-controls {
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
}

.zine-controls button {
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.zine-controls button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.zine-hint {
  color: #888;
  font-size: 0.8rem;
  margin-top: 0.75rem;
}

.zine-loading-more {
  margin-top: 0.35rem;
  color: #d99a35;
}
</style>
