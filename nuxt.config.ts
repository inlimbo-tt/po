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
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${process.env.NODE_ENV === 'production' ? '/po' : ''}/favicon.ico`,
        },
      ],
    },
  },
})
