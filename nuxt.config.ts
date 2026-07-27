import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Park Ouest',
      meta: [
        { name: 'description', content: 'Park Ouest — publicaties, cijfers, podcasts, foto\'s en media.' },
      ],
    },
  },
})
