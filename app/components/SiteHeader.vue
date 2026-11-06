<script setup lang="ts">
import { computed } from 'vue'
import { getHeroTiles } from '~/data/content'
import { useT } from '~/i18n/ui'

const { locale } = useLocale()
const t = useT()
const logoUrl = useAsset('/tiles/parkouest_logo.png')
const navLabels: Record<string, { nl: string; fr: string }> = {
  publications: { nl: 'Publicaties', fr: 'Publications' },
  'park-in-cijfers': { nl: 'Cijfers', fr: 'Chiffres' },
  'park-in-evolutie': { nl: 'Participatie', fr: 'Participation' },
  fotos: { nl: "Foto's", fr: 'Photos' },
  media: { nl: 'Pers', fr: 'Presse' },
  bezoek: { nl: 'Bezoek', fr: 'Visiter' },
}
const navItems = computed(() => getHeroTiles(locale.value).map(({ id, title }) => ({
  id,
  title: navLabels[id]?.[locale.value] ?? title,
})))

function scrollToTop(e: Event) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="site-header">
    <a href="#" class="flex items-center" :aria-label="t.nav.homeAria" @click="scrollToTop">
      <span
        class="block h-6 w-28 bg-park-green-dark sm:h-7 sm:w-32"
        :style="`-webkit-mask-image: url('${logoUrl}'); mask-image: url('${logoUrl}'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: left center; mask-position: left center;`"
        role="img"
        aria-label="Park Ouest"
      />
    </a>

    <nav class="hidden items-center gap-1 md:flex" :aria-label="t.nav.ariaLabel">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="inline-flex min-h-9 items-center whitespace-nowrap rounded-full border border-park-green/15 bg-white/55 px-2.5 text-xs font-bold text-park-ink/80 transition-colors hover:border-park-green/35 hover:bg-park-green/10 hover:text-park-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
      >
        {{ item.title }}
      </a>
    </nav>

    <LanguageSwitcher />
  </header>
</template>
