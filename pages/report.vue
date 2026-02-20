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
import { marked } from 'marked';
import type { Report } from '~/types/report';

const config = useRuntimeConfig();

const { data, status } = await useLazyFetch<{
  data: Report[];
}>(config.public.apiUrl + '/reports');

const reports = computed(() =>
  data.value
    ? data.value.data.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    : null,
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
