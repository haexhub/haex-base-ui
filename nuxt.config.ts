import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },

  modules: [
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "nuxt-snackbar",
  ],

  imports: {
    dirs: ["composables/**", "stores/**", "components/**", "pages/**", "types/**"],
  },

  i18n: {
    strategy: "prefix_and_default",
    defaultLocale: "de",
    vueI18n: "~/i18n/i18n.config.ts",

    locales: [
      { code: "de", language: "de-DE", isCatchallLocale: true },
      { code: "en", language: "en-EN" },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },

    types: "composition",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  zodI18n: {
    localeCodesMapping: {
      "en-GB": "en",
      "de-DE": "de",
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})