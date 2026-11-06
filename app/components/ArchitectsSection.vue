<script setup lang="ts">
import { useT } from '~/i18n/ui'

const t = useT()

const architects = [
  { name: 'Studio Paola Viganò', url: 'https://studiopaolavigano.eu/' },
  { name: 'Plant en Houtgoed', url: 'https://plantenhoutgoed.be/' },
]
</script>

<template>
  <div id="architecten" class="mt-6 border-t border-park-green/15 pt-5" aria-labelledby="architecten-title">
    <div class="grid items-center gap-5 sm:grid-cols-2 sm:gap-7">
      <img
        :src="useAsset('/images/assets/studio-maquette-plaine.jpg')"
        :alt="t.parkEvolution.architectImageAlt"
        class="aspect-[4/3] w-full rounded-2xl object-cover"
        loading="lazy"
      >
      <div>
        <h4 id="architecten-title" class="font-heading text-lg font-bold text-park-ink">{{ t.parkEvolution.architectsTitle }}</h4>
        <p class="mt-2 text-sm leading-relaxed text-park-ink/75">{{ t.parkEvolution.architectsIntro }}</p>
        <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a
            v-for="architect in architects"
            :key="architect.name"
            :href="architect.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-park-green-dark underline decoration-park-green/40 underline-offset-4 hover:decoration-park-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
          >
            {{ architect.name }}
            <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
