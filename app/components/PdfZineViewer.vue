<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import { PageFlip } from 'page-flip'

const props = defineProps<{
  pdfUrl: string
  title: string
}>()

const emit = defineEmits<{ close: [] }>()

const loading = ref(true)
const error = ref('')
const bookRef = ref<HTMLElement | null>(null)
let pageFlip: PageFlip | null = null

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).href

async function renderPdf() {
  loading.value = true
  error.value = ''

  try {
    const pdf = await pdfjsLib.getDocument({ url: props.pdfUrl }).promise
    const pageImages: string[] = []

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const viewport = page.getViewport({ scale: 1.5 })
      const canvas = document.createElement('canvas')
      canvas.width = viewport.width
      canvas.height = viewport.height
      const ctx = canvas.getContext('2d')!
      await page.render({ canvas, canvasContext: ctx, viewport }).promise
      pageImages.push(canvas.toDataURL('image/jpeg', 0.85))
    }

    await nextTick()
    initFlipbook(pageImages)
  } catch (e) {
    error.value = 'Kon PDF niet laden. Controleer of het bestand bestaat.'
    console.error(e)
  } finally {
    loading.value = false
  }
}

function initFlipbook(images: string[]) {
  if (!bookRef.value || images.length === 0) return

  bookRef.value.innerHTML = ''
  images.forEach((src) => {
    const page = document.createElement('div')
    page.className = 'flip-page'
    const img = document.createElement('img')
    img.src = src
    img.alt = 'PDF pagina'
    page.appendChild(img)
    bookRef.value!.appendChild(page)
  })

  // A4 portrait ratio (height / width)
  const A4_RATIO = 1.4142
  // reserve room for the modal header, controls and hint text so they stay visible
  const chromeHeight = 170
  const maxContainerWidth = window.innerWidth * 0.9
  const maxContainerHeight = window.innerHeight * 0.95 - chromeHeight
  const isDoublePage = maxContainerWidth / 2 >= 400

  let pageWidth = isDoublePage ? maxContainerWidth / 2 : maxContainerWidth
  let pageHeight = pageWidth * A4_RATIO
  if (pageHeight > maxContainerHeight) {
    pageHeight = maxContainerHeight
    pageWidth = pageHeight / A4_RATIO
  }

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
        <button class="close-btn" aria-label="Sluiten" @click="emit('close')">✕</button>
      </header>

      <div v-if="loading" class="zine-status">PDF laden…</div>
      <div v-else-if="error" class="zine-status error">{{ error }}</div>

      <div v-show="!loading && !error" class="zine-body">
        <div ref="bookRef" class="flip-book" />
        <div class="zine-controls">
          <button @click="prevPage">← Vorige</button>
          <button @click="nextPage">Volgende →</button>
        </div>
        <p class="zine-hint">Sleep of klik om te bladeren</p>
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
  padding: 1rem;
}

.zine-modal {
  background: #2a2a2a;
  border-radius: 16px;
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;
  padding: 1.5rem;
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
  padding: 0.25rem 0.5rem;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #fff;
}

.zine-status {
  color: #ccc;
  text-align: center;
  padding: 3rem;
}

.zine-status.error {
  color: #f88;
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
</style>
