<template>
  <h2 class="text-4xl font-bold mb-4 flex justify-center">Berichte</h2>
  <div class="divider"></div>
  <div class="mb-4 grid gap-4 grid-cols-2">
    <div v-for="(report, index) in reports" :key="index" class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h1 class="text-2xl font-bold" v-html="formatText(report.title)"></h1>
        <p class="whitespace-pre-line" v-html="formatText(report.text)"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue';
import { supabase } from '../supabase';
import type { Tables } from '@/database/supabase';


const reports: Ref<Array<Tables<'Reports'>>> = ref([])

onMounted(() => {
  supabase
    .from('Reports')
    .select('*').then(response => {
      reports.value = response.data || [];
    });
})

function formatText(text: string) {
  return text.replace(/\\n/g, "<br>");
}

</script>

<style scoped>
@media (max-width: 1300px) {
  .grid {
    @apply grid-cols-1;
  }
}
</style>
