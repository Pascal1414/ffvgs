<template>
  <h1>Chart</h1>
  <p v-if="mounted">Mounted!</p>
  <p v-if="!mounted">Not Mounted!</p>

  <VChart :option="option" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const option = ref<ECOption>({
  dataset: {
    dimensions: ["Product", "2015", "2016", "2017"],
    source: [
      {
        Product: "Matcha Latte",
        2015: 54,
        2016: 42,
        2017: 23,
      },
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [{ type: "bar" }],
});
console.log("Component loading.");

const mounted = ref(false);

onMounted(() => {
  console.log("Component mounted, chart should be visible.");
  mounted.value = true;
});
</script>
