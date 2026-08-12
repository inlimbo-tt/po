/**
 * Prefixes a root-relative public/ asset path (e.g. "/images/hero.jpg") with the
 * app's baseURL, so assets resolve correctly when deployed under a subpath
 * (e.g. GitHub Pages project sites served from "/repo-name/").
 * Leaves absolute http(s) URLs untouched.
 *
 * Also swaps a "_NL" marker in the filename for "_FR" when the current site
 * language is French — e.g. "/pdfs/summary_NL.pdf" becomes
 * "/pdfs/summary_FR.pdf". Paths without "_NL" are left untouched.
 */
export function useAsset(path: string): string {
  if (/^https?:\/\//.test(path)) return path

  const { locale } = useLocale()
  const localizedPath = locale.value === 'fr' && path.includes('_NL')
    ? path.replace('_NL', '_FR')
    : path

  const { app } = useRuntimeConfig()
  const base = app.baseURL.replace(/\/+$/, '')
  return `${base}${localizedPath.startsWith('/') ? localizedPath : `/${localizedPath}`}`
}
