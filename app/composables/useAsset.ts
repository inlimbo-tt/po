/**
 * Prefixes a root-relative public/ asset path (e.g. "/images/hero.jpg") with the
 * app's baseURL, so assets resolve correctly when deployed under a subpath
 * (e.g. GitHub Pages project sites served from "/repo-name/").
 * Leaves absolute http(s) URLs untouched.
 */
export function useAsset(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  const { app } = useRuntimeConfig()
  const base = app.baseURL.replace(/\/+$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
