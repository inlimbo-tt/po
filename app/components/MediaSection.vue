<script setup lang="ts">
import { mediaItems } from '~/data/content'
import { useT } from '~/i18n/ui'

const t = useT()
// Alternates between the two semantic accents (identity green / listen-read-act amber)
// so publisher tags add rhythm without introducing off-palette hues.
const accentColors = ['#2f6b4a', '#b9791f']
</script>

<template>
  <section id="media" class="site-section surface-accent-mist">
    <div v-reveal class="section-inner">
      <h2 class="section-title">{{ t.media.title }}</h2>
      <p class="section-lead">
        {{ t.media.lead }}
      </p>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(item, i) in mediaItems"
          :key="item.id"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col overflow-hidden rounded-2xl border border-park-ink/8 bg-white shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
        >
          <div class="aspect-[3/2] w-full overflow-hidden bg-park-cream">
            <img
              :src="useAsset(item.thumbnail)"
              :alt="t.media.altTemplate(item.title, item.source)"
              loading="lazy"
              class="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
            >
          </div>

          <div class="flex flex-1 flex-col p-5">
            <span class="text-xs font-bold tracking-widest uppercase" :style="{ color: accentColors[i % accentColors.length] }">{{ item.source }}</span>
            <h3 class="mt-2 flex-1 text-balance font-heading text-lg leading-snug font-bold text-park-ink">{{ item.title }}</h3>
            <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-park-green transition-transform duration-300 motion-safe:group-hover:translate-x-1">
              {{ t.media.readArticle }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
