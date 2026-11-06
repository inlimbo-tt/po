<script setup lang="ts">
import { useT } from '~/i18n/ui'

const t = useT()
const imageUrl = useAsset('/images/assets/architect-placeholder.svg')

const architects = [
  { name: 'Studio Paola Viganò', url: 'https://studiopaolavigano.eu/' },
  { name: 'Plant en Houtgoed', url: 'https://plantenhoutgoed.be/' },
]
</script>

<template>
  <section id="architecten" class="ml-0 mt-5 rounded-3xl border-l-4 border-park-amber/60 bg-park-amber/10 p-5 shadow-sm sm:ml-4 sm:mt-6 sm:p-7 lg:ml-8 lg:p-8" aria-labelledby="architecten-title">
    <div v-reveal class="section-inner">
      <h3 id="architecten-title" class="font-heading text-2xl font-bold text-park-ink sm:text-3xl">{{ t.parkEvolution.architectsTitle }}</h3>
      <p class="section-lead mt-3">
        {{ t.parkEvolution.architectsLead }}
      </p>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <a
          v-for="architect in architects"
          :key="architect.name"
          :href="architect.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group overflow-hidden rounded-2xl border border-park-ink/8 bg-white shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
        >
          <div class="aspect-[16/7] overflow-hidden bg-park-cream">
            <img
              :src="imageUrl"
              :alt="t.parkEvolution.architectImageAlt"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            >
          </div>
          <div class="flex items-center justify-between gap-4 p-5">
            <div>
              <h3 class="font-heading text-lg font-bold text-park-ink">{{ architect.name }}</h3>
              <p class="mt-1 text-sm text-park-ink/60">{{ t.parkEvolution.architectPlaceholder }}</p>
            </div>
            <span class="text-xl text-park-green" aria-hidden="true">↗</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
