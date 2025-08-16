<template>
  <h2 class="text-4xl font-bold mb-4 flex justify-center">Berichte</h2>
  <div class="divider"></div>
  <div class="mb-4 grid gap-4 grid-cols-2">
    <div
      v-for="(report, index) in reports"
      :key="index"
      class="card bg-base-200 shadow-xl"
    >
      <div class="card-body marked" v-html="marked(report.text)" />
    </div>
    <div
      v-if="status === 'pending' && reports === null"
      v-for="n in 5"
      class="skeleton w-full h-[600px] bg-base-200"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
import type { Report } from "~/types/report";
import type { AsyncData } from "#app";

const config = useRuntimeConfig();

const { data: reports, status } = await useLazyFetch(
  config.public.apiUrl + "/reports",
  {
    query: { populate: "*", "pagination[limit]": -1 },
    transform: (_reports: AsyncData<any, any>) => {
      const reports = sanitizeApiResponse(_reports) as Report[];
      return reports.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    },
  },
);
</script>

<style scoped>
@reference '~/assets/css/main.css';
@reference '~/assets/css/marked.css';

@media (max-width: 1300px) {
  .grid {
    @apply grid-cols-1;
  }
}
</style>
