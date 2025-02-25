// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@vesp/nuxt-fontawesome"],
  fontawesome: {
    icons: {
      solid: ['cog', 'home'],
      brands: ['instagram', 'linkedin', 'youtube', 'google'],
    }
  },
  googleFonts: {
    families: {
      Vollkorn: [400, 700],
      Manrope: [400, 700],
    },
    display: "swap",
  },
  image: {
    // Options
  },



  head: {
    htmlAttrs: {
      lang: 'en', // Set the lang attribute to English
    },
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-dart.min.js",
      },
    ],
  },
});
