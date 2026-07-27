export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      el.classList.add('reveal')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal-visible')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.15 },
      )

      observer.observe(el)
    },
  })
})
