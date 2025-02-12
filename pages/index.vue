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
    v-if="pending && articles === null"
    v-for="n in 5"
  >
    <div class="divider" />

    <div class="skeleton h-[40px] w-[90%] mb-4"></div>
    <div class="skeleton h-4 w-[77%]"></div>
    <div class="skeleton h-4 w-[75%]"></div>
    <div class="skeleton h-4 w-[80%]"></div>
    <div class="skeleton h-4 w-[72%]"></div>
  </div>

  <article>
    <div class="divider" />

    <BarChart />
    <div class="hero">
      <div class="hero-content text-center">
        <div class="">
          <h1 class="text-5xl font-bold">Fangstatistik</h1>
          <p class="py-6">
            Im Jahr 2023 betrug der Gesamtfang im Greifensee 13,1 t. Dies
            entspricht einem Rückgang von ca. 10 % gegenüber dem Vorjahr und
            rund 17 % im Vergleich zum zehnjährigen Durchschnitt (Tab. 2).
            Besonders auffällig war der starke Rückgang bei den Felchenfängen
            (-48 %). Im Gegensatz dazu konnten bei Egli (17 %) und Hecht (14 %)
            höhere Erträge verzeichnet werden. Im Vergleich mit dem langjährigen
            Mittel war das Jahr 2023 mit einer Steigerung von 26 % ein
            erfolgreiches Jahr für den Hechtfang. Seit 2009 wird auf den
            Hechtbesatz im Greifensee verzichtet. Die hohen stabilen Fangzahlen
            sind ein klares Indiz, dass die Naturverlaichung der Hechte im
            Greifensee gut funktioniert.
          </p>
          <p class="py-2">
            Die Fangerträge im Greifensee 2023 waren die niedrigsten seit den
            1980er-Jahren. Hauptursache dafür sind die Felchenfänge, die anfangs
            der 2000er-Jahre stark zurückgingen. Dies liegt vor allem an der
            Aktivität der Berufsfischerei. Bis 2006 waren noch zwei
            Berufsfischer auf dem See tätig, wobei einer davon bereits ab 2003
            seine Aktivität stark reduzierte. In den letzten zwei Jahren wurde
            der Ertragsrückgang zusätzlich durch den unfallbedingten
            Arbeitsausfall des verbliebenen Berufsfischers verstärkt.
          </p>

          <a
            class="link link-primary"
            href="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/umwelt-tiere/tiere/fischerei-und-jagd/fischerei/fachinformationen/jahreskennzahlen_fischerei/jahresbericht_fischerei_2023.pdf"
          >
            Quelle Jahresbericht Fischerei 2023 - Amt für Landschaft und Natur
          </a>
        </div>
      </div>
    </div>
  </article>

  <article v-for="(article, index) in articles">
    <div class="divider" />
    <ImageHero
      v-if="article.images?.length"
      :reversed="index % 2 == 0"
      :images="article.images.map((i) => i.url)"
    >
      <div
        class="flex flex-col gap-[1rem] marked"
        v-html="marked(article.text)"
      />
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
</template>

<script lang="ts" setup>
import type { AsyncData } from "#app";

import { marked } from "marked";
import type { HomeArticle } from "~/types/home-article";

import BarChart from "~/components/charts/BarChart.vue";

const config = useRuntimeConfig();

const { data: articles, pending } = await useLazyFetch(
  config.public.apiUrl + "/home-articles",
  {
    query: { populate: "*" },
    transform: (_articles: AsyncData<any, any>) => {
      const articles = sanitizeApiResponse(_articles) as HomeArticle[];
      return articles.sort((a: any, b: any) => a.priority - b.priority);
    },
  }
);
</script>

<style scoped>
@import url(assets/css/marked.css);
</style>
