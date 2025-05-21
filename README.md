# Haex Hub Base Layer

## extend nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [
    ["github:haexhub/haex-base-ui", { install: true }]
  ],

  ...
})
```

## specify icons

**ATTENTION**
for production builds you need to specify, which icons or collections you want to have in your build
this layer uses `@iconify/json` which means, per default **ALL** icons available will be bundled! Thats for sure nothing you want, as it will blow up your build to GB size. Instead specify in your `nuxt.config.ts` what icons and/or collections you need!
For example:

```ts
export default defineNuxtConfig({
  ...
  icon: {
    provider: 'server',
    mode: "svg",
    clientBundle: {
      icons: ["solar:global-outline", "gg:extension", "hugeicons:corporate"],
      scan: true,
      includeCustomCollections: true,
    },
    serverBundle: { collections: ["mdi", "line-md", "solar", "gg", "emojione"] },

    customCollections: [
      {
        prefix: 'my-icon',
        dir: './src/assets/icons/'
      },
    ],
  },
  ...
})
```

## Have fun
