<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { parkInfographic, parkInfographics } from '~/data/content'

const activeIndex = ref(0)
const zoomed = ref(false)
let touchStartX = 0

function prev() {
  activeIndex.value = activeIndex.value === 0 ? parkInfographics.length - 1 : activeIndex.value - 1
}

function next() {
  activeIndex.value = activeIndex.value === parkInfographics.length - 1 ? 0 : activeIndex.value + 1
}

function goTo(i: number) {
  activeIndex.value = i
}

function toggleZoom() {
  zoomed.value = !zoomed.value
}

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  const deltaX = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(deltaX) < 40) return
  if (deltaX > 0) prev()
  else next()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') zoomed.value = false
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section id="park-in-cijfers" class="site-section">
    <div class="section-inner">
      <h2 class="section-title">{{ parkInfographic.title }}</h2>
      <p class="section-lead">{{ parkInfographic.description }}</p>

      <div
        class="relative mx-auto w-full max-w-3xl"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <button
          type="button"
          class="block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(22,40,31,0.15)]"
          aria-label="Klik om in te zoomen"
          @click="toggleZoom"
        >
          <img
            :src="useAsset(parkInfographics[activeIndex])"
            :alt="`Infographic Park Ouest ${activeIndex + 1}`"
            class="aspect-[4/3] w-full object-cover"
          >
        </button>

        <button
          v-if="parkInfographics.length > 1"
          type="button"
          class="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-park-ink shadow-md transition-colors hover:bg-white sm:-left-5"
          aria-label="Vorige infographic"
          @click.stop="prev"
        >
          ←
        </button>
        <button
          v-if="parkInfographics.length > 1"
          type="button"
          class="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-park-ink shadow-md transition-colors hover:bg-white sm:-right-5"
          aria-label="Volgende infographic"
          @click.stop="next"
        >
          →
        </button>

        <div v-if="parkInfographics.length > 1" class="mt-4 flex justify-center gap-2">
          <button
            v-for="(img, i) in parkInfographics"
            :key="img"
            type="button"
            class="h-2.5 w-2.5 rounded-full transition-colors"
            :class="i === activeIndex ? 'bg-park-green' : 'bg-park-ink/20'"
            :aria-label="`Ga naar infographic ${i + 1}`"
            @click="goTo(i)"
          />
        </div>
      </div>
    </div>

    <div v-if="zoomed" class="infographic-lightbox" @click="zoomed = false">
      <img :src="useAsset(parkInfographics[activeIndex])" :alt="`Infographic Park Ouest ${activeIndex + 1}`">
    </div>
  </section>
</template>

<style scoped>
.infographic-lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(22, 40, 31, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
}

.infographic-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  object-fit: contain;
}
</style>
