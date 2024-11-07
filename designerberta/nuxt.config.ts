// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts' // Add the Google Fonts module
  ],
  googleFonts: {
    families: {
      Vollkorn: [400, 700], // Load Vollkorn with specified weights
    },
    display: 'swap', // Optional: use swap display for better UX
  }
})
