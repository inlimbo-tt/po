<script setup lang="ts">
import { onMounted } from 'vue'
import { heroImage } from '~/data/content'

const bg = useAsset(heroImage)

const { initLocale } = useLocale()
onMounted(initLocale)
</script>

<template>
  <div>
    <div class="park-bg-layer" :style="{ backgroundImage: `url(${bg})` }" aria-hidden="true" />
    <NuxtRouteAnnouncer />
    <LanguageSwitcher />
    <NuxtPage />
  </div>
</template>
