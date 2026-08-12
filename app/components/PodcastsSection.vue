<script setup lang="ts">
import { ref, computed } from 'vue'
import { podcastEpisodes } from '~/data/content'
import type { PodcastEpisode } from '~/data/content'

const currentEpisode = ref<PodcastEpisode | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const showSummaryViewer = ref(false)

const summaryPdfUrl = '/pdfs/summary_participation_NL.pdf'
const currentTitle = computed(() => currentEpisode.value?.title ?? '')

function playEpisode(ep: PodcastEpisode) {
  if (currentEpisode.value?.id === ep.id) {
    togglePlay()
    return
  }
  currentEpisode.value = ep
  nextTickPlay()
}

function nextTickPlay() {
  requestAnimationFrame(() => {
    if (audioRef.value) {
      audioRef.value.load()
      audioRef.value.play().catch(() => {})
    }
  })
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play().catch(() => {})
  }
}

function closePlayer() {
  audioRef.value?.pause()
  currentEpisode.value = null
  isPlaying.value = false
}

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}

function downloadSummary() {
  const link = document.createElement('a')
  link.href = useAsset(summaryPdfUrl)
  link.download = 'samenvatting-participatie.pdf'
  link.click()
}
</script>

<template>
  <section id="podcasts" class="site-section band-green" :style="currentEpisode ? 'padding-bottom: 6rem;' : ''">
    <div v-reveal class="section-inner">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-park-amber/15 px-3 py-1 text-xs font-bold tracking-wide text-park-amber uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-3.5 w-3.5">
          <path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2v2Zm18 0a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Beluister
      </span>
      <h2 class="section-title mt-3">Podcasts</h2>
      <p class="section-lead">
        Radio Park Ouest verzamelt de verhalen van de buurt. Elke aflevering bespreken we een aspect van hoe Park Ouest eruit zou kunnen zien. Aan de hand van de inhoud van deze podcasts tekent het ontwerpbureau de plannen van het toekomstig park. Hieronder kan je de afleveringen beluisteren. Je kan ook een korte samenvatting lezen in pdf vorm.
      </p>

      <ul class="flex flex-col gap-4">
        <li v-for="(ep, i) in podcastEpisodes" :key="ep.id">
          <button
            type="button"
            class="flex w-full items-center gap-5 rounded-[1.5rem] bg-white px-5 py-4 text-left shadow-[0_4px_20px_rgba(22,40,31,0.06)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg sm:px-6 sm:py-5"
            :class="currentEpisode?.id === ep.id ? 'ring-2 ring-park-amber' : ''"
            @click="playEpisode(ep)"
          >
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-park-amber text-white transition-transform duration-300 motion-safe:hover:scale-105">
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
        </li>
      </ul>

      <div class="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(22,40,31,0.06)] sm:p-5">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-park-ink/8 text-park-ink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-5 w-5">
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V17a2 2 0 0 0 2 2m-16-.5A1.5 1.5 0 0 0 5.5 20H18a2 2 0 0 1-2-2M8 8h5M8 11.5h5M8 15h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-body text-base font-bold text-park-ink">Samenvatting in PDF</p>
          <p class="text-sm text-park-ink/60">Een korte samenvatting van de podcastreeks.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full bg-park-green px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-park-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
            @click="showSummaryViewer = true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4">
              <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H9v14H5.5A1.5 1.5 0 0 1 4 15.5v-11ZM11 3h3.5A1.5 1.5 0 0 1 16 4.5v11a1.5 1.5 0 0 1-1.5 1.5H11V3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            Lees online
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-park-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-park-ink transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-park-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
            @click="downloadSummary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-4 w-4">
              <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 16.5h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentEpisode" class="audio-bar">
      <div class="audio-bar-inner">
        <button class="audio-play" aria-label="Afspelen/pauzeren" @click="togglePlay">
          {{ isPlaying ? '⏸' : '▶' }}
        </button>
        <div class="audio-meta">
          <span class="audio-title">{{ currentTitle }}</span>
          <audio
            ref="audioRef"
            :src="useAsset(currentEpisode.audioUrl)"
            controls
            class="audio-element"
            @play="onPlay"
            @pause="onPause"
          />
        </div>
        <button class="audio-close" aria-label="Speler sluiten" @click="closePlayer">✕</button>
      </div>
    </div>

    <ClientOnly>
      <LazyPdfZineViewer
        v-if="showSummaryViewer"
        :pdf-url="useAsset(summaryPdfUrl)"
        title="Samenvatting in PDF"
        @close="showSummaryViewer = false"
      />
    </ClientOnly>
  </section>
</template>

<style scoped>
.audio-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background: #16281f;
  color: #fff;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
}

.audio-bar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.audio-play {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #d99a35;
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
}

.audio-meta {
  flex: 1;
  min-width: 0;
}

.audio-title {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.audio-element {
  width: 100%;
  height: 32px;
}

.audio-close {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #fff;
  opacity: 0.6;
  transition: opacity 0.2s, background 0.2s;
}

.audio-close:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}
</style>
