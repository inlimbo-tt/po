<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

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
      <PodcastsSection />
      <FotosSection />
      <MediaSection />
    </main>

    <FooterSection />

    <button
      class="back-to-top"
      :class="{ visible: showBackToTop }"
      aria-label="Terug naar boven"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
</template>
