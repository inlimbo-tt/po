<script setup lang="ts">
import { ref } from 'vue'
import { publications, publicationsBlurb } from '~/data/content'
import type { Publication } from '~/data/content'

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
  <section id="publications" class="site-section">
    <div class="section-inner">
      <h2 class="section-title">Publications</h2>
      <p class="section-lead">{{ publicationsBlurb }}</p>

      <div class="flex flex-col gap-6">
        <div
          v-for="pub in publications"
          :key="pub.id"
          class="rounded-[1.75rem] bg-white p-4 shadow-[0_8px_32px_rgba(22,40,31,0.08)] sm:p-6"
        >
          <span class="inline-block rounded-full bg-park-green px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Read
          </span>

          <div class="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div class="aspect-square w-full shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/20 sm:w-64" :style="{ backgroundColor: pub.coverColor }">
              <img :src="useAsset(pub.tileImage)" :alt="pub.title" class="h-full w-full object-cover">
            </div>

            <div class="min-w-0">
              <p class="text-xs font-bold tracking-widest text-park-green uppercase">{{ pub.title }}</p>
              <h3 class="mt-2 font-serif text-2xl font-bold text-park-ink sm:text-3xl">{{ pub.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-park-ink/70 sm:text-base">{{ pub.description }}</p>

              <div class="mt-6 flex flex-wrap gap-3">
                <button
                  class="rounded-full bg-park-green px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-park-green-dark"
                  @click="readPdf(pub)"
                >
                  Read online
                </button>
                <button
                  class="rounded-full border border-park-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-park-ink transition-colors hover:bg-park-cream"
                  @click="downloadPdf(pub)"
                >
                  Download PDF
                </button>
              </div>
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
