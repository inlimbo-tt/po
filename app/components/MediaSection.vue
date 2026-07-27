<script setup lang="ts">
import { mediaItems } from '~/data/content'
</script>

<template>
  <section id="media" class="site-section">
    <div class="section-inner">
      <h2 class="section-title">Media</h2>
      <p class="section-lead">
        Persberichten, artikelen en reportages over Park Ouest in de media.
      </p>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="item in mediaItems"
          :key="item.id"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group block overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(22,40,31,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(22,40,31,0.15)]"
        >
          <div class="aspect-[4/3] w-full overflow-hidden bg-park-cream">
            <img
              :src="item.thumbnail"
              :alt="item.title"
              loading="lazy"
              class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            >
          </div>
          <div class="p-4">
            <span class="text-xs font-bold tracking-widest text-park-green uppercase">{{ item.source }}</span>
            <h3 class="mt-1 font-serif text-lg font-bold text-park-ink">{{ item.title }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
