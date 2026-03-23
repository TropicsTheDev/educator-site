import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sanity",
    "@primevue/nuxt-module",
    "@nuxtjs/seo",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],

  // Color mode — dark as default, class-based switching
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },

  // Tailwind CSS v4 via native Vite plugin
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // Sanity CMS
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2026-03-01",
  },

  // PrimeVue unstyled mode — Tailwind handles all styling via passthrough
  primevue: {
    autoImport: true,
    options: {
      unstyled: true,
    },
  },

  // SEO — @nuxtjs/seo bundles sitemap, robots, schema.org, og-image, link-checker
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    name: "PCT Movement",
    description:
      "BJJ and Urban Kiz coaching through Perceptual Control Theory",
  },

  // Nuxt Image — Sanity provider for responsive images
  image: {
    sanity: {
      projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID as string,
      dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
    },
  },

  // Font loading via @nuxt/fonts — self-hosted with fallback metrics
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
  },

  // Hybrid rendering — prerender static pages, ISR for blog, SSR for contact
  routeRules: {
    "/": { prerender: true },
    "/teach/bjj": { prerender: true },
    "/teach/dance": { prerender: true },
    "/bjj": { redirect: "/teach/bjj" },
    "/dance": { redirect: "/teach/dance" },
    "/about": { prerender: true },
    "/portfolio": { prerender: true },
    "/blog": { isr: 3600 },
    "/blog/**": { isr: true },
    "/contact": { ssr: true },
    "/api/**": { cors: true },
  },

  // Runtime config — server-only secrets + public values
  runtimeConfig: {
    // Server-only (NEVER exposed to client)
    sanityApiReadToken: "",
    resendApiKey: "",

    public: {
      sanityProjectId: "",
      sanityDataset: "production",
      sanityApiVersion: "2026-03-01",
      siteUrl: "http://localhost:3000",
    },
  },

  // Allow build to succeed without Sanity data (prerendered pages may fail)
  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
});
