<script setup lang="ts">
import { heroTiles, heroImage } from '~/data/content'

const heroBg = useAsset(heroImage)

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const spanClasses: Record<string, string> = {
  publications: 'lg:col-span-3',
  'park-in-cijfers': 'lg:col-span-3',
  podcasts: 'lg:col-span-2',
  fotos: 'lg:col-span-2',
  media: 'lg:col-span-2',
}
</script>

<template>
  <header class="mx-auto max-w-6xl px-4 pt-10 pb-4 sm:px-6 sm:pt-14 lg:px-8">
    <div v-reveal class="relative overflow-hidden rounded-3xl shadow-xl">
      <img
        :src="heroBg"
        alt="Buurtbewoners genieten van Park Ouest onder een kleurrijk plafond van linten"
        class="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[21/9]"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-park-ink/95 via-park-ink/45 to-park-ink/5" aria-hidden="true" />

      <div class="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase backdrop-blur-sm">
          <span class="h-1.5 w-1.5 rounded-full bg-park-amber" aria-hidden="true" />
          Molenbeek, Brussel
        </span>

        <h1 class="text-balance mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Park Ouest
        </h1>

        <p class="mt-4 max-w-[60ch] font-sans text-base leading-relaxed text-white/90 sm:text-lg">
          Park Ouest: tot voor kort een braakliggend terrein, nu de huiskamer, tuin en bos van de buurt. Lees hier onze jaarverslagen, bekijk statistieken en foto's, luister naar onze podcasts, lees wat anderen over ons schrijven.
        </p>

        <button
          type="button"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-park-ink shadow-lg transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          @click="scrollToSection('publications')"
        >
          Ontdek Park Ouest
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
      aria-label="Hoofdnavigatie"
    >
      <button
        v-for="tile in heroTiles"
        :key="tile.id"
        v-reveal
        type="button"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-5 text-left shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-6"
        :class="spanClasses[tile.id]"
        :style="{ backgroundColor: tile.color }"
        @click="scrollToSection(tile.id)"
      >
        <div class="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/20">
          <img
            :src="useAsset(tile.image)"
            :alt="tile.title"
            class="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-safe:group-hover:rotate-1"
          >
        </div>

        <div class="mt-4 flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h2 class="text-balance font-serif text-xl font-bold text-white sm:text-2xl">{{ tile.title }}</h2>
            <p class="mt-1.5 font-sans text-sm leading-snug text-white/85">{{ tile.description }}</p>
          </div>

          <span
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-park-ink"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-3.5 w-3.5">
              <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </button>
    </nav>
  </header>
</template>
