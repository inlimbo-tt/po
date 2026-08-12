export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      el.classList.add('reveal')

      // threshold: 0 (any pixel visible) rather than a percentage — a
      // percentage threshold can never be satisfied for elements taller
      // than the viewport (e.g. the Media grid stacked to one column on
      // mobile), which left them permanently hidden at opacity: 0.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal-visible')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -10% 0px' },
      )

      observer.observe(el)
    },
  })
})
