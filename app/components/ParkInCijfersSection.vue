<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { getParkInfographic, parkInfographics } from '~/data/content'
import { useT } from '~/i18n/ui'

const { locale } = useLocale()
const t = useT()
const parkInfographic = computed(() => getParkInfographic(locale.value))

const activeIndex = ref(0)
const zoomed = ref(false)
const zoomTrigger = ref<HTMLButtonElement | null>(null)
const zoomCloseButton = ref<HTMLButtonElement | null>(null)
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
  zoomed.value = true
  nextTick(() => zoomCloseButton.value?.focus())
}

function closeZoom() {
  zoomed.value = false
  nextTick(() => zoomTrigger.value?.focus())
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
  if (e.key === 'Escape' && zoomed.value) closeZoom()
  if (e.key === 'Tab' && zoomed.value) {
    e.preventDefault()
    zoomCloseButton.value?.focus()
    return
  }
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section id="park-in-cijfers" class="site-section surface-neutral">
    <div v-reveal class="section-inner">
      <h2 class="section-title">{{ parkInfographic.title }}</h2>
      <p class="section-lead">{{ parkInfographic.description }}</p>

      <div
        class="relative mx-auto w-full max-w-3xl rounded-3xl bg-park-green-dark p-3 shadow-lg sm:p-4"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <div class="relative">
          <button
            type="button"
            ref="zoomTrigger"
            class="flex h-[55vh] w-full max-h-[560px] cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl bg-park-cream"
            :aria-label="t.parkInCijfers.zoomAria"
            @click="toggleZoom"
          >
            <img
              :src="useAsset(parkInfographics[activeIndex])"
              :alt="t.parkInCijfers.altTemplate(activeIndex + 1)"
              class="max-h-full max-w-full object-contain"
            >
          </button>

          <button
            v-if="parkInfographics.length > 1"
            type="button"
            class="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-park-ink shadow-md transition-colors hover:bg-white"
            :aria-label="t.parkInCijfers.prevAria"
            @click.stop="prev"
          >
            ←
          </button>
          <button
            v-if="parkInfographics.length > 1"
            type="button"
            class="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-park-ink shadow-md transition-colors hover:bg-white"
            :aria-label="t.parkInCijfers.nextAria"
            @click.stop="next"
          >
            →
          </button>
        </div>

        <div v-if="parkInfographics.length > 1" class="mt-4 flex justify-center gap-2">
          <button
            v-for="(img, i) in parkInfographics"
            :key="img"
            type="button"
            class="h-2.5 w-2.5 rounded-full transition-colors"
            :class="i === activeIndex ? 'bg-white' : 'bg-white/30'"
            :aria-label="t.parkInCijfers.goToAria(i + 1)"
            @click="goTo(i)"
          />
        </div>
      </div>
    </div>

    <div
      v-if="zoomed"
      class="infographic-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="parkInfographic.title"
      @click.self="closeZoom"
    >
      <button
        ref="zoomCloseButton"
        type="button"
        class="infographic-lightbox-close"
        :aria-label="t.parkInCijfers.closeZoom"
        @click="closeZoom"
      >
        <span aria-hidden="true">×</span>
      </button>
      <img :src="useAsset(parkInfographics[activeIndex])" :alt="t.parkInCijfers.altTemplate(activeIndex + 1)">
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
}

.infographic-lightbox-close {
  position: absolute;
  top: max(1rem, env(safe-area-inset-top, 0px) + 0.5rem);
  right: max(1rem, env(safe-area-inset-right, 0px) + 0.5rem);
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  font-size: 2rem;
  line-height: 1;
}

.infographic-lightbox-close:hover {
  background: rgba(255, 255, 255, 0.26);
}

.infographic-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  object-fit: contain;
}
</style>
