<script setup lang="ts">
import { heroImage } from '~/data/content'

const bg = useAsset(heroImage)
</script>

<template>
  <div>
    <div class="park-bg-layer" :style="{ backgroundImage: `url(${bg})` }" aria-hidden="true" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
