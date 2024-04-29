<template>
  <h1 class="text-4xl font-bold mb-4">Downloads</h1>
  <ul class="">
    <li></li>
    <li></li>
  </ul>
  <ul class="menu bg-base-200 w-56 p-2 rounded-box">
    <li class="menu-title">
      <span>PDF's</span>
    </li>
    <li v-for="item in docs">
      <a class="link no-underline" :href="item" :key="item">{{
        getFormattedName(item)
      }}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import useDocuments from "~/composable/useDocuments";

const docs = useDocuments();

function getFormattedName(filename: string) {
  return filename.replace(/-/g, " ").replace(".pdf", "");
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
