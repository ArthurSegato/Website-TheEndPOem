// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    webhooks: {
      discordName: process.env.WEBHOOK_DISCORD_NAME,
      discordEmail: process.env.WEBHOOK_DISCORD_EMAIL,
    },
  },
});
