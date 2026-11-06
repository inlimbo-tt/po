<script setup lang="ts">
import { isLocale, locales, type Locale } from '~/composables/useLocale'
import { useT } from '~/i18n/ui'

const { locale, setLocale } = useLocale()
const t = useT()
const languageNames: Record<Locale, string> = {
  nl: 'Nederlands',
  fr: 'Français',
  sq: 'Shqip',
  ar: 'العربية',
  ary: 'الدارجة',
  en: 'English',
  de: 'Deutsch',
  ln: 'Lingála',
  'zh-CN': '中文（普通话）',
  ro: 'Română',
  ru: 'Русский',
  es: 'Español',
  sw: 'Kiswahili',
  uk: 'Українська',
  wo: 'Wolof',
}

function onChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  if (isLocale(value)) setLocale(value)
}
</script>

<template>
  <select
    class="lang-select"
    :value="locale"
    :aria-label="t.languageSwitcher.ariaLabel"
    @change="onChange"
  >
    <option v-for="code in locales" :key="code" :value="code">{{ languageNames[code] }}</option>
  </select>
</template>

<style scoped>
.lang-select {
  min-height: 2.75rem;
  max-width: 9.5rem;
  padding: 0.5rem 2rem 0.5rem 0.85rem;
  border: 1px solid rgba(22, 40, 31, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: #16281f;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
