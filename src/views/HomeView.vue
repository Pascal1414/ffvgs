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

  <div class="divider">
  </div>
  <div v-for="article in articles">
    <div v-if="article.images?.length">
      <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content w-full flex-col lg:flex-row-reverse">
          <img :src="article.images[0]" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
          <div v-html="markdownToHtml(article.text)">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content place-items-start w-full flex-col" v-html="markdownToHtml(article.text)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { marked } from 'marked';
import { supabase } from '../supabase';
import type { Tables } from '@/database/supabase';

let articles: Ref<Array<Tables<'HomeArticles'>>> = ref([])


onMounted(() => {
  supabase
    .from('HomeArticles')
    .select('*')
    .then(({ data, error }) => {
      articles.value = data || []
    });
});

function markdownToHtml(markdown: string) {
  return marked(markdown)
}
</script>

<style scoped></style>
