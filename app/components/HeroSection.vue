<script setup lang="ts">
import { computed } from 'vue'
import { getHeroTiles } from '~/data/content'
import { useT } from '~/i18n/ui'

const { locale } = useLocale()
const t = useT()
const heroTiles = computed(() => getHeroTiles(locale.value))

const logoUrl = useAsset('/tiles/parkouest_logo.png')

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

// Some tile colors (amber, light green) are too light for white text to
// meet WCAG AA contrast — switch to dark ink text on those automatically.
function isLightTile(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance > 0.45
}
</script>

<template>
  <section class="relative mx-auto max-w-6xl px-4 pt-10 pb-4 sm:px-6 sm:pt-14 lg:px-8">
    <div
      class="pointer-events-none absolute inset-0 rounded-[2.5rem]"
      style="background: rgba(18, 46, 35, 0.14);"
      aria-hidden="true"
    />

    <div v-reveal class="relative py-10 text-center sm:py-14">
      <h1 class="flex justify-center">
        <div class="hero-title-backdrop w-4/5 px-[6%] py-[7%]">
          <div
            class="mx-auto aspect-[3508/869] w-full bg-park-green-dark"
            :style="`-webkit-mask-image: url('${logoUrl}'); mask-image: url('${logoUrl}'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;`"
            role="img"
            aria-label="Park Ouest"
          />
        </div>
      </h1>

      <div class="hero-tagline-backdrop mx-auto mt-6 max-w-xl px-6 py-4 sm:px-8 sm:py-5">
        <p class="text-balance font-heading text-base text-park-ink sm:text-lg">
          {{ t.hero.tagline }}
        </p>
        <button
          type="button"
          class="mt-4 inline-flex items-center gap-2 rounded-full bg-park-amber px-6 py-3 text-sm font-bold text-park-ink shadow-md transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-park-amber-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
          @click="scrollToSection('publications')"
        >
          {{ t.hero.cta }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      class="relative mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
      :aria-label="t.nav.ariaLabel"
    >
      <button
        v-for="tile in heroTiles"
        :key="tile.id"
        v-reveal
        type="button"
        class="group relative flex flex-col overflow-hidden rounded-2xl p-5 pb-6 text-left shadow-[0_10px_30px_rgba(15,35,25,0.22)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_16px_40px_rgba(15,35,25,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-6 sm:pb-7"
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

        <div class="mt-5 flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h2
              class="text-balance font-heading font-bold"
              :class="isLightTile(tile.color) ? 'text-park-ink' : 'text-white'"
              style="font-size: clamp(1.5rem, 2vw, 2rem); line-height: 1.1;"
            >{{ tile.title }}</h2>
            <p
              class="mt-2.5 text-base leading-[1.4]"
              :class="isLightTile(tile.color) ? 'text-park-ink/80' : 'text-white/90'"
            >{{ tile.description }}</p>
          </div>

          <span
            class="flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-park-ink"
            :class="isLightTile(tile.color) ? 'bg-park-ink/15 text-park-ink' : 'bg-white/25 text-white'"
            style="width: clamp(2.25rem, 4vw, 2.75rem); height: clamp(2.25rem, 4vw, 2.75rem);"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" style="width: clamp(0.9rem, 1.6vw, 1.1rem); height: clamp(0.9rem, 1.6vw, 1.1rem);" aria-hidden="true">
              <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </button>
    </nav>
  </section>
</template>
