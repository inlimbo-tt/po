<script setup lang="ts">
import { ref, computed } from 'vue'
import { podcastEpisodes } from '~/data/content'
import type { PodcastEpisode } from '~/data/content'

const currentEpisode = ref<PodcastEpisode | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const currentTitle = computed(() => currentEpisode.value?.title ?? '')

function playEpisode(ep: PodcastEpisode) {
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

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}
</script>

<template>
  <section id="podcasts" class="site-section" style="padding-bottom: 7rem;">
    <div class="section-inner">
      <span class="inline-block rounded-full bg-park-amber px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
        Listen
      </span>
      <h2 class="section-title mt-4">Podcasts</h2>
      <p class="section-lead">
        Luister naar verhalen over Park Ouest — van visie en groen tot buurt en gemeenschap.
      </p>

      <ul class="flex flex-col gap-4">
        <li v-for="(ep, i) in podcastEpisodes" :key="ep.id">
          <button
            class="flex w-full items-center gap-5 rounded-[1.5rem] bg-white px-5 py-4 text-left shadow-[0_4px_20px_rgba(22,40,31,0.06)] transition-shadow sm:px-6 sm:py-5"
            :class="currentEpisode?.id === ep.id ? 'ring-2 ring-park-amber' : ''"
            @click="playEpisode(ep)"
          >
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-park-amber text-white">
              {{ currentEpisode?.id === ep.id && isPlaying ? '⏸' : '▶' }}
            </span>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold tracking-widest text-park-ink/50 uppercase">Episode {{ String(i + 1).padStart(2, '0') }}</p>
              <h3 class="mt-0.5 font-serif text-lg font-bold text-park-ink">{{ ep.title }}</h3>
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
    </div>

    <div v-if="currentEpisode" class="audio-bar">
      <div class="audio-bar-inner">
        <button class="audio-play" @click="togglePlay">
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
      </div>
    </div>
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
</style>
