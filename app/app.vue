<script setup lang="ts">
import { onMounted } from 'vue'
import { heroImage } from '~/data/content'
import { isRtlLocale } from '~/composables/useLocale'

const bg = useAsset(heroImage)

const { initLocale, locale } = useLocale()
useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: isRtlLocale(locale.value) ? 'rtl' : 'ltr',
  },
}))
onMounted(initLocale)
</script>

<template>
  <div>
    <div class="park-bg-layer" :style="{ backgroundImage: `url(${bg})` }" aria-hidden="true" />
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <NuxtPage />
  </div>
</template>
