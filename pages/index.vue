<template>
  <div class="hero min-h-[300px] bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">FFVGS</h1>
        <p class="py-6">
          Der Freie Fischerverein Greifensee-Schwerzenbach besteht seit 1978 und
          ist ein Verein mit rund 170 Mitgliedern aus allen Altersklassen. Wir
          fördern den Angelsport und geben unser Wissen den jüngeren Fischern
          weiter. So lernen Sie aus professioneller Sicht, wie die Fischerei
          Spass macht und sich trotzdem mit Flora und Fauna am Wasser
          vereinbaren lässt.
        </p>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col gap-1 mb-10"
    v-if="status === 'pending' && articles === null"
    v-for="n in 5"
  >
    <div class="divider" />

    <div class="skeleton h-[40px] w-[90%] mb-4"></div>
    <div class="skeleton h-4 w-[77%]"></div>
    <div class="skeleton h-4 w-[75%]"></div>
    <div class="skeleton h-4 w-[80%]"></div>
    <div class="skeleton h-4 w-[72%]"></div>
  </div>

  <article v-for="(article, index) in articles">
    <div class="divider" />

    <ImageHero
      v-if="article.images?.length"
      :reversed="index % 2 == 0"
      :images="article.images.map((i) => i.url)"
    >
      <div class="flex flex-col gap-4 marked" v-html="marked(article.text)" />
    </ImageHero>
    <div v-else>
      <div class="sm:hero min-h-[400px]">
        <div
          class="hero-content place-items-start w-full flex-col marked"
          v-html="marked(article.text || '')"
        />
      </div>
    </div>
  </article>

  <article>
    <div class="divider"></div>

    <div class="hero min-h-120">
      <div
        class="hero-content text-center lg:text-start lg:gap-12 flex-col lg:flex-row lg:justify-between"
      >
        <div class="md:w-[80%] lg:w-2/5">
          <div class="flex flex-col gap-4 marked">
            <h1>Unsere Sponsoren</h1>
            <p>
              Ein herzliches Dankeschön an all unsere Sponsoren! Wir schätzen
              eure Hilfe sehr und freuen uns, gemeinsam unsere Leidenschaft für
              das Angeln zu fördern.
            </p>
          </div>
        </div>
        <Sponsors class="md:w-[80%] lg:w-3/5 mt-10 lg:mt-0" />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { marked } from 'marked';
import type { HomeArticle } from '~/types/home-article';

const config = useRuntimeConfig();

const { data, status } = await useLazyFetch<{
  data: HomeArticle[];
}>(config.public.apiUrl + '/home-articles', {
  query: { populate: '*' },
});

const articles = computed(() =>
  data.value
    ? data.value.data.sort((a: any, b: any) => a.priority - b.priority)
    : null,
);
</script>

<style scoped>
@import url(assets/css/marked.css);
</style>
