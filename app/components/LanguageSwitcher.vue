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
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: rgba(22, 40, 31, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(18, 46, 35, 0.25);
}

.lang-btn {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);
  transition: background 0.2s, color 0.2s;
}

.lang-btn.active {
  background: #fff;
  color: #16281f;
}

.lang-btn:not(.active):hover {
  color: #fff;
}

@media (min-width: 640px) {
  .lang-switcher {
    top: 1.25rem;
    right: 1.25rem;
  }
}
</style>
