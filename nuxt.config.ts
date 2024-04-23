// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/cloudinary"],
  runtimeConfig: {
    public: {
      backendUrl: process.env.STRAPI_API_URL,
      apiUrl: process.env.STRAPI_API_URL + "/api",
      uploadsUrl: process.env.STRAPI_API_URL + "/uploads",
    },
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },
  },
});
