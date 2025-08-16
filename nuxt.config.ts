// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/cloudinary", "nuxt-echarts"],
  components: true,
  runtimeConfig: {
    public: {
      backendUrl: process.env.STRAPI_API_URL,
      apiUrl: process.env.STRAPI_API_URL + "/api",
      uploadsUrl: process.env.STRAPI_API_URL + "/uploads",
      formspree: {
        contactFormUrl: process.env.CONTACT_FORM_URL,
        joinFormUrl: process.env.JOIN_FORM_URL,
        eventRegistration: process.env.EVENT_REGISTRATION_FORM_URL,
      },
    },

    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },
  },
  echarts: {
    charts: ["BarChart"],
    components: [
      "TitleComponent",
      "TooltipComponent",
      "GridComponent",
      "LegendComponent",
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css", "~/assets/css/marked.css"],
  compatibilityDate: "2024-08-20",
});
