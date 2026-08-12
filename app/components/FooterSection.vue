<script setup lang="ts">
const toestandLogo = useAsset('/logos/toestand.svg')
const leefmilieuLogo = useAsset('/logos/leefmilieu-brussel.svg')
</script>

<template>
  <footer class="flex justify-center px-4 py-2">
    <div class="footer-backdrop flex flex-col items-center gap-5 px-8 py-6 text-center sm:px-10 sm:py-7">
      <p class="font-body text-sm text-white/80 sm:text-base">
        Een project van en voor de buurt, in samenwerking met
      </p>

      <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        <a
          href="https://www.toestand.be"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-85 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Toestand vzw"
        >
          <img :src="toestandLogo" alt="Toestand vzw" class="h-8 w-auto sm:h-10">
        </a>

        <a
          href="https://leefmilieu.brussels"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-90 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Leefmilieu Brussel"
        >
          <img :src="leefmilieuLogo" alt="Leefmilieu Brussel" class="h-8 w-auto sm:h-10">
        </a>
      </div>
    </div>
  </footer>
</template>
