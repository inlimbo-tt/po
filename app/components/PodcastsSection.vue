<script setup lang="ts">
import { ref } from 'vue'
import { podcastEpisodes } from '~/data/content'
import type { PodcastEpisode } from '~/data/content'

const currentEpisode = ref<PodcastEpisode | null>(null)
const isPlaying = ref(false)
const audioRefs = ref<Record<string, HTMLAudioElement | null>>({})

function setAudioRef(id: string, el: Element | null) {
  audioRefs.value[id] = el as HTMLAudioElement | null
}

function toggleEpisode(ep: PodcastEpisode) {
  if (currentEpisode.value?.id === ep.id) {
    currentEpisode.value = null
    isPlaying.value = false
    return
  }
  currentEpisode.value = ep
  isPlaying.value = false
  requestAnimationFrame(() => {
    audioRefs.value[ep.id]?.play().catch(() => {})
  })
}

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}
</script>

<template>
  <section id="podcasts" class="site-section band-green">
    <div v-reveal class="section-inner">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-park-amber/15 px-3 py-1 text-xs font-bold tracking-wide text-park-amber uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-3.5 w-3.5">
          <path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2v2Zm18 0a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Beluister
      </span>
      <h2 class="section-title mt-3">Podcasts</h2>
      <p class="section-lead">
        Luister naar verhalen over Park Ouest — van visie en groen tot buurt en gemeenschap.
      </p>

      <ul class="flex flex-col gap-4">
        <li v-for="(ep, i) in podcastEpisodes" :key="ep.id">
          <div
            class="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_4px_20px_rgba(22,40,31,0.06)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg"
            :class="currentEpisode?.id === ep.id ? 'ring-2 ring-park-amber' : ''"
          >
            <button
              type="button"
              class="flex w-full items-center gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
              :aria-expanded="currentEpisode?.id === ep.id"
              @click="toggleEpisode(ep)"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-park-amber text-white transition-transform duration-300 motion-safe:hover:scale-105"
              >
                {{ currentEpisode?.id === ep.id && isPlaying ? '⏸' : '▶' }}
              </span>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold tracking-widest text-park-ink/50 uppercase">Aflevering {{ String(i + 1).padStart(2, '0') }}</p>
                <h3 class="mt-0.5 font-body text-lg font-bold text-park-ink">{{ ep.title }}</h3>
              </div>
              <span class="flex shrink-0 items-center gap-1.5 text-sm text-park-ink/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-4 w-4">
                  <path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2v2Zm18 0a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ ep.duration }}
              </span>
            </button>

            <div v-show="currentEpisode?.id === ep.id" class="px-5 pb-5 sm:px-6">
              <audio
                :ref="(el) => setAudioRef(ep.id, el)"
                :src="useAsset(ep.audioUrl)"
                controls
                class="w-full"
                @play="onPlay"
                @pause="onPause"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
