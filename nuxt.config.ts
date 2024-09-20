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
  // routeRules: {
  //   // Static page generated on-demand, revalidates in background
  //   "/blog/**": { swr: true },
  //   // Static page generated on-demand once
  //   "/articles/**": { static: true },
  //   // Set custom headers matching paths
  //   "/_nuxt/**": { headers: { "cache-control": "s-maxage=0" } },
  //   // Render these routes with SPA
  //   "/admin/**": { ssr: false },
  //   // Add cors headers
  //   "/api/v1/**": { cors: true },
  //   // Add redirect headers
  //   "/old-page": { redirect: "/new-page" },
  //   "/old-page2": { redirect: { to: "/new-page", statusCode: 302 } },
  // },
  routeRules: {
    // CSR
    "/posts/**": { ssr: false },
  },
});
