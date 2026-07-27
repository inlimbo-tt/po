import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true, // or false depending on if you want SPA mode, but default true works fine,
  nitro: {
    preset: 'github-pages'
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/po/' : '/',
    head: {
      title: 'Park Ouest',
      meta: [
        { name: 'description', content: 'Park Ouest — publicaties, cijfers, podcasts, foto\'s en media.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },
})
