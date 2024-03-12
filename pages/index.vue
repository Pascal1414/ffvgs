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

  <div v-for="(article, index) in  articles ">
    <div class="divider" />
    <ImageHero v-if="article.attributes.Images?.length" :reversed="index % 2 == 0"
      :images="article.attributes.Images.map(({ formats }) => formats?.medium?.url)">
      <div class="marked" v-html="marked(article.attributes.Text)" />
    </ImageHero>
    <div v-else>
      <div class="sm:hero min-h-[400px]">
        <div class="hero-content place-items-start w-full flex-col marked" v-html="marked(article.attributes.Text)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { marked } from 'marked';
import ImageHero from '@/components/ImageHero.vue';
import type { HomeArticle } from '~/types/home-article';

let articles: Ref<Array<HomeArticle>> = ref([])

await useFetch('https://ffvgs-backend.onrender.com/api/home-articles', {
  query: { "populate": '*' },
  onResponse({ request, response, options }) {
    articles.value = response._data.data;
  }
})

</script>

<style scoped>
@import url(assets/css/marked.css);
</style>