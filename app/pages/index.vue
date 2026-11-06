<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useT } from '~/i18n/ui'
import { useAudioBarActive } from '~/composables/useAudioBar'

const t = useT()
const { locale } = useLocale()
const audioBarActive = useAudioBarActive()
const showBackToTop = ref(false)

useHead(() => ({
  title: t.value.meta.title,
  meta: [{
    name: 'description',
    content: t.value.meta.description,
  }],
}))

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  showBackToTop.value = window.scrollY > 600
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div>
    <HeroSection />
    <main>
      <PublicationsSection />
      <ParkInCijfersSection />
      <ParkEvolutionSection />
      <FotosSection />
      <MediaSection />
      <VisitInfoSection />
    </main>

    <button
      class="back-to-top"
      :class="{ visible: showBackToTop, 'above-audio-bar': audioBarActive }"
      :aria-label="t.backToTop.ariaLabel"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
</template>
