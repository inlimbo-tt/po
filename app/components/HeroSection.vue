<script setup lang="ts">
import { heroTiles } from '~/data/content'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <header class="relative min-h-screen">

    <div class="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <div class="w-full max-w-2xl rounded-[2rem] bg-white/25 px-6 py-10 text-center shadow-xl backdrop-blur-md sm:px-10 sm:py-12">
        <h1 class="font-serif text-6xl font-bold tracking-tight text-park-ink sm:text-7xl lg:text-8xl">
          Parc Ouest
        </h1>

        <p class="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-park-ink/70 sm:text-lg">
          A living, breathing green space in the heart of the city. Pick a tile to explore our
          zine, listen to the podcast, browse the gallery, or follow the park's story.
        </p>
      </div>

      <nav class="grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Hoofdnavigatie">
        <button
          v-for="tile in heroTiles"
          :key="tile.id"
          type="button"
          class="group relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-3xl p-5 text-left shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
          :style="{ backgroundColor: tile.color }"
          @click="scrollToSection(tile.id)"
        >
          <div class="relative z-10 flex items-start justify-between">
            <span class="inline-block rounded-full bg-white/25 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-white uppercase backdrop-blur-sm">
              {{ tile.pill }}
            </span>
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-park-ink"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4">
                <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>

          <div class="relative z-10 flex items-stretch gap-4">
            <div class="flex min-w-0 flex-1 flex-col justify-end">
              <h2 class="font-serif text-2xl font-bold text-white sm:text-3xl">{{ tile.title }}</h2>
              <p class="mt-2 font-sans text-sm leading-snug text-white/85">{{ tile.description }}</p>
            </div>

            <div class="w-2/5 shrink-0 overflow-hidden rounded-2xl bg-white/15 shadow-lg ring-1 ring-white/25">
              <img
                :src="tile.image"
                :alt="tile.title"
                class="h-full w-full object-cover"
              >
            </div>
          </div>
        </button>
      </nav>
    </div>
  </header>
</template>
