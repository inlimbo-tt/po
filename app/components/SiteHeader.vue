<script setup lang="ts">
const logoUrl = useAsset('/tiles/parkouest_logo.png')

function scrollToTop(e: Event) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="site-header">
    <a href="#" class="flex items-center" aria-label="Park Ouest — naar boven" @click="scrollToTop">
      <span
        class="block h-6 w-28 bg-park-green-dark sm:h-7 sm:w-32"
        :style="`-webkit-mask-image: url('${logoUrl}'); mask-image: url('${logoUrl}'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: left center; mask-position: left center;`"
        role="img"
        aria-label="Park Ouest"
      />
    </a>

    <LanguageSwitcher />
  </header>
</template>
