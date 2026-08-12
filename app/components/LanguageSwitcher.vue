<script setup lang="ts">
import { useT } from '~/i18n/ui'

const { locale, setLocale } = useLocale()
const t = useT()
</script>

<template>
  <div class="lang-switcher" role="group" :aria-label="t.languageSwitcher.ariaLabel">
    <button
      type="button"
      class="lang-btn"
      :class="{ active: locale === 'nl' }"
      :aria-pressed="locale === 'nl'"
      @click="setLocale('nl')"
    >
      NL
    </button>
    <button
      type="button"
      class="lang-btn"
      :class="{ active: locale === 'fr' }"
      :aria-pressed="locale === 'fr'"
      @click="setLocale('fr')"
    >
      FR
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: rgba(22, 40, 31, 0.9);
  box-shadow: 0 2px 8px rgba(18, 46, 35, 0.18);
}

.lang-btn {
  min-width: 2.75rem;
  min-height: 2.5rem;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.65);
  transition: background 0.2s, color 0.2s;
}

.lang-btn.active {
  background: #fff;
  color: #16281f;
}

.lang-btn:not(.active):hover {
  color: #fff;
}
</style>
