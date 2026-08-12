export type Locale = 'nl' | 'fr'

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
    }
  }

  function initLocale() {
    if (!import.meta.client) return
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'nl' || saved === 'fr') {
      locale.value = saved
    }
    document.documentElement.lang = locale.value
  }

  return { locale, setLocale, initLocale }
}
