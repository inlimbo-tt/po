<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPublications, getPublicationsBlurb } from '~/data/content'
import type { Publication } from '~/data/content'
import { useT } from '~/i18n/ui'

const { locale } = useLocale()
const t = useT()
const publications = computed(() => getPublications(locale.value))
const publicationsBlurb = computed(() => getPublicationsBlurb(locale.value))

const showViewer = ref<Publication | null>(null)

function downloadPdf(pub: Publication) {
  const link = document.createElement('a')
  link.href = useAsset(pub.pdfUrl)
  link.download = `${pub.id}.pdf`
  link.click()
}

function readPdf(pub: Publication) {
  showViewer.value = pub
}

function closeViewer() {
  showViewer.value = null
}
</script>

<template>
  <section id="publications" class="site-section surface-accent-amber">
    <div v-reveal class="section-inner">
      <h2 class="section-title">{{ t.publications.title }}</h2>
      <p class="section-lead">{{ publicationsBlurb }}</p>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div
          v-for="pub in publications"
          :key="pub.id"
          class="group flex flex-col overflow-hidden rounded-2xl border border-park-ink/8 bg-white shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
        >
          <div class="p-3" :style="{ backgroundColor: pub.coverColor }">
            <div class="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                :src="useAsset(pub.tileImage)"
                :alt="pub.title"
                class="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              >
            </div>
          </div>

          <div class="flex flex-1 flex-col p-5 sm:p-6">
            <h3 class="font-heading text-2xl font-bold text-park-ink">{{ pub.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-park-ink/70 sm:text-base">{{ pub.description }}</p>

            <div class="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full bg-park-green px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-park-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
                @click="readPdf(pub)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true">
                  <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H9v14H5.5A1.5 1.5 0 0 1 4 15.5v-11ZM11 3h3.5A1.5 1.5 0 0 1 16 4.5v11a1.5 1.5 0 0 1-1.5 1.5H11V3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                {{ t.publications.readOnline }}
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full border border-park-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-park-ink transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-park-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
                @click="downloadPdf(pub)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true">
                  <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 16.5h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ t.publications.download }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ClientOnly>
        <LazyPdfZineViewer
          v-if="showViewer"
          :pdf-url="useAsset(showViewer.pdfUrl)"
          :title="showViewer.title"
          @close="closeViewer"
        />
      </ClientOnly>
    </div>
  </section>
</template>
