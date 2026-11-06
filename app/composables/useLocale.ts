export type Locale = 'nl' | 'fr' | 'en' | 'ar' | 'ary' | 'es' | 'sq' | 'wo' | 'ru' | 'uk'

export const locales: Locale[] = ['nl', 'fr', 'en', 'ar', 'ary', 'es', 'sq', 'wo', 'uk', 'ru']

export function isLocale(value: string): value is Locale {
  return locales.some(locale => locale === value)
}

export function isRtlLocale(locale: Locale): boolean {
  return locale === 'ar' || locale === 'ary'
}

const STORAGE_KEY = 'po-locale'

/**
 * Global reactive locale state (SSR-safe via useState). Defaults to Dutch,
 * the site's original language. The choice is persisted to localStorage so
 * it survives reloads.
 */
export function useLocale() {
  const locale = useState<Locale>('locale', () => 'nl')

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
      document.documentElement.dir = isRtlLocale(next) ? 'rtl' : 'ltr'
    }
  }

  function initLocale() {
    if (!import.meta.client) return
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && isLocale(saved)) locale.value = saved
    document.documentElement.lang = locale.value
    document.documentElement.dir = isRtlLocale(locale.value) ? 'rtl' : 'ltr'
  }

  return { locale, setLocale, initLocale }
}
