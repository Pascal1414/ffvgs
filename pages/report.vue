<template>
  <h2 class="text-4xl font-bold mb-4 flex justify-center">Berichte</h2>
  <div class="divider"></div>
  <div class="mb-4 grid gap-4 grid-cols-2">
    <div v-for="(report, index) in reports" :key="index" class="card bg-base-200 shadow-xl">
      <div class="card-body marked" v-html="marked(report.Text)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked';
import type { Report } from '~/types/report';


const reports: Ref<Report[]> = ref([])

await useLazyFetch('https://ffvgs-backend.onrender.com/api/reports', {
  onResponse({ request, response, options }) {
    const sanitizedResponse = sanitizeApiResponse(response._data) as Report[];
    console.log(sanitizedResponse);

    reports.value = sanitizedResponse;
  }
})

</script>

<style scoped>
@media (max-width: 1300px) {
  .grid {
    @apply grid-cols-1;
  }
}
</style>

<style scoped>
@import url(assets/css/marked.css);
</style>
