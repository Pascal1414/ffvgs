<template>
  <h2 class="text-4xl font-bold mb-4 flex justify-center">Berichte</h2>
  <div class="divider"></div>
  <div class="mb-4 grid gap-4 grid-cols-2">
    <div v-for="(report, index) in reports" :key="index" class="card bg-base-200 shadow-xl">
      <div class="card-body marked" v-html="marked(report.text)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue';
import { marked } from 'marked';


const reports = ref([])

onMounted(() => {

})
</script>

<style scoped>
@media (max-width: 1300px) {
  .grid {
    @apply grid-cols-1;
  }
}
</style>

<style scoped src="../css/marked.css"></style>
