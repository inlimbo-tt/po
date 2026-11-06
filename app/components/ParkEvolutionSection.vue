<script setup lang="ts">
import { useT } from '~/i18n/ui'

const t = useT()
</script>

<template>
  <section id="park-in-evolutie" class="site-section surface-accent-green" aria-labelledby="park-evolution-title">
    <div v-reveal class="section-inner">
      <h2 id="park-evolution-title" class="mb-2 font-heading text-xl font-bold text-park-green-dark sm:text-2xl">{{ t.parkEvolution.title }}</h2>
      <p class="max-w-3xl text-sm leading-relaxed text-park-ink/75 sm:text-base">
        {{ t.parkEvolution.subtitle }}
      </p>

      <PodcastsSection />
      <ArchitectsSection />
    </div>
  </section>
</template>
