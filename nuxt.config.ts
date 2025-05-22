import tailwindcss from "@tailwindcss/vite";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: { enabled: true },

  modules: [
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],

  imports: {
    dirs: [
      join(currentDir, "./composables/**"),
      join(currentDir, "./components/**"),
      join(currentDir, "./stores/**"),
    ],
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    //storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },

  i18n: {
    strategy: "prefix_and_default",
    defaultLocale: "de",
    vueI18n: join(currentDir, "./i18n/i18n.config.ts"),

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

  css: [join(currentDir, "./assets/css/tailwind.css")],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
