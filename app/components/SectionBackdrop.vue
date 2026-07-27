<script setup lang="ts">
defineProps<{
  backgroundImage: string
  overlay?: 'dark' | 'green' | 'warm' | 'purple' | 'cool'
}>()
</script>

<template>
  <section
    class="section-backdrop"
    :style="{ '--section-bg': `url(${backgroundImage})` }"
  >
    <div class="section-bg-image" aria-hidden="true" />
    <div class="section-overlay" :class="overlay ?? 'dark'" aria-hidden="true" />
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-backdrop {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
}

.section-bg-image {
  position: absolute;
  inset: 0;
  background-image: var(--section-bg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
}

.section-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.section-overlay.dark {
  background: linear-gradient(
    165deg,
    rgba(8, 12, 10, 0.88) 0%,
    rgba(8, 12, 10, 0.72) 45%,
    rgba(8, 12, 10, 0.85) 100%
  );
}

.section-overlay.green {
  background: linear-gradient(
    165deg,
    rgba(6, 20, 12, 0.9) 0%,
    rgba(10, 30, 18, 0.75) 50%,
    rgba(6, 18, 10, 0.88) 100%
  );
}

.section-overlay.warm {
  background: linear-gradient(
    165deg,
    rgba(20, 12, 8, 0.88) 0%,
    rgba(28, 16, 10, 0.72) 50%,
    rgba(18, 10, 8, 0.88) 100%
  );
}

.section-overlay.purple {
  background: linear-gradient(
    165deg,
    rgba(14, 8, 22, 0.9) 0%,
    rgba(20, 12, 32, 0.75) 50%,
    rgba(12, 8, 20, 0.88) 100%
  );
}

.section-overlay.cool {
  background: linear-gradient(
    165deg,
    rgba(6, 14, 22, 0.9) 0%,
    rgba(8, 18, 28, 0.75) 50%,
    rgba(6, 12, 20, 0.88) 100%
  );
}

.section-content {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding: 5rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-inner {
  width: 100%;
  max-width: 1100px;
}

.section-panel {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: clamp(1.75rem, 4vw, 3rem);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

.section-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #fff;
  letter-spacing: -0.02em;
}

.section-lead {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.72);
  max-width: 640px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .section-bg-image {
    background-attachment: scroll;
  }
}
</style>
