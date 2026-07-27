<script setup lang="ts">
import { heroImage } from '~/data/content'

const bg = useAsset(heroImage)
</script>

<template>
  <div class="app-bg" :style="{ backgroundImage: `url(${bg})` }">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
