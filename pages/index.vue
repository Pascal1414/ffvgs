<template>
  <div class="hero min-h-[300px] bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">FFVGS</h1>
        <p class="py-6">
          Der Freie Fischerverein Greifensee-Schwerzenbach besteht seit 1978 und ist ein Verein mit
          rund 170 Mitgliedern aus allen Altersklassen. Wir fördern den Angelsport und geben unser
          Wissen den jüngeren Fischern weiter. So lernen Sie aus professioneller Sicht, wie die
          Fischerei Spass macht und sich trotzdem mit Flora und Fauna am Wasser vereinbaren lässt.
        </p>
      </div>
    </div>
  </div>

  <div v-if="!isFetched" class="w-full flex justify-center">
    <span class="loading loading-spinner loading-lg mt-[50px] mb-[50px]"></span>
  </div>

  <div v-if="isFetched" v-for="(article, index) in  articles ">
    <div class="divider" />
    <ImageHero v-if="article.Images?.length" :reversed="index % 2 == 0"
      :images="article.Images.map(({ formats }) => (`https://ffvgs-backend.onrender.com${formats?.medium?.url}`))">
      <div class="marked" v-html="marked(article.Text)" />
    </ImageHero>
    <div v-else>
      <div class="sm:hero min-h-[400px]">
        <div class="hero-content place-items-start w-full flex-col marked" v-html="marked(article.Text)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked';
import type { HomeArticle } from '~/types/home-article';

const articles: Ref<HomeArticle[]> = ref([])
const isFetched = ref(false)


useLazyFetch('https://ffvgs-backend.onrender.com/api/home-articles', {
  query: { "populate": '*' },
  onResponse({ request, response, options }) {
    const sanitizedResponse = sanitizeApiResponse(response._data) as HomeArticle[];
    isFetched.value = true

    articles.value = sanitizedResponse;
  }
})
</script>

<style scoped>
@import url(assets/css/marked.css);
</style>
