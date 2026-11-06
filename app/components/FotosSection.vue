<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { photos } from '~/data/content'
import { useT } from '~/i18n/ui'

const t = useT()

const activeIndex = ref(0)
const zoomed = ref(false)
const zoomTrigger = ref<HTMLButtonElement | null>(null)
const zoomCloseButton = ref<HTMLButtonElement | null>(null)
let touchStartX = 0

function prev() {
  activeIndex.value = activeIndex.value === 0 ? photos.length - 1 : activeIndex.value - 1
}

function next() {
  activeIndex.value = activeIndex.value === photos.length - 1 ? 0 : activeIndex.value + 1
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
  <section id="fotos" class="site-section surface-accent-green">
    <div v-reveal class="section-inner">
      <span class="inline-block rounded-full bg-park-green/12 px-3 py-1 text-xs font-bold tracking-wide text-park-green uppercase">
        {{ t.fotos.pill }}
      </span>
      <h2 class="section-title mt-3">{{ t.fotos.title }}</h2>
      <p class="section-lead">
        {{ t.fotos.lead }}
      </p>

      <div
        class="relative mx-auto w-full max-w-3xl rounded-3xl bg-park-green p-3 shadow-lg sm:p-4"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <button
          type="button"
          class="block w-full cursor-zoom-in overflow-hidden rounded-2xl"
          :aria-label="t.fotos.zoomAria"
          ref="zoomTrigger"
          @click="toggleZoom"
        >
          <img
            :src="useAsset(photos[activeIndex])"
            :alt="t.fotos.altTemplate(activeIndex + 1)"
            class="aspect-[4/3] w-full bg-park-ink object-contain"
          >
        </button>

        <div class="mt-3 flex items-center justify-between px-1">
          <span class="text-sm font-semibold text-white/80">{{ activeIndex + 1 }} / {{ photos.length }}</span>
          <div v-if="photos.length > 1" class="flex items-center gap-2">
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              :aria-label="t.fotos.prevAria"
              @click="prev"
            >
              ←
            </button>
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              :aria-label="t.fotos.nextAria"
              @click="next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="zoomed"
      class="photo-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="t.fotos.title"
      @click.self="closeZoom"
    >
      <button
        ref="zoomCloseButton"
        type="button"
        class="photo-lightbox-close"
        :aria-label="t.fotos.closeZoom"
        @click="closeZoom"
      >
        <span aria-hidden="true">×</span>
      </button>
      <img :src="useAsset(photos[activeIndex])" :alt="t.fotos.altTemplate(activeIndex + 1)">
    </div>
  </section>
</template>

<style scoped>
.photo-lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(22, 40, 31, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.photo-lightbox-close {
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

.photo-lightbox-close:hover {
  background: rgba(255, 255, 255, 0.26);
}

.photo-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  object-fit: contain;
}
</style>
