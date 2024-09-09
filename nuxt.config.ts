// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // css: ["/assets/css/style.css"],
  // components: [
  //   {
  //     path: "~/components",
  //     pathPrefix: false,
  //   },
  // ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    // pageTransition: false, // アプリ全体で無効化
    head: {
      title: "Nuxt 3 basic",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
});
