// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: [
      {
        code: 'th',
        name: 'ไทย',
        // file: 'th.ts'
      },
      {
        code: 'en',
        name: 'English',
        // file: 'en.ts'
      }
    ],
    defaultLocale: 'th',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',  // recommended
    }
  }
})