<template>
  <VChart ref="chartRef" :option="option" style="width: 100%; height: 400px" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

var option = ref<ECOption>({
  title: {
    text: "Fischfangstatistik (2014-2023)",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: [
      "Felchen",
      "Hecht",
      "Egli",
      "Wels",
      "Rotauge",
      "Karpfen",
      "Übrige",
      "Total",
    ],
  },
  xAxis: {
    type: "category",
    data: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
  },
  yAxis: {
    type: "value",
    name: "Fangmenge",
  },
  series: [
    {
      name: "Felchen",
      type: "bar",
      stack: "total", // Add stack property to group bars
      data: [5975, 4845, 2943, 3949, 3208, 6250, 9086, 3680, 5033, 2616],
    },
    {
      name: "Hecht",
      type: "bar",
      stack: "total",
      data: [2106, 2500, 2398, 2604, 2461, 2584, 3301, 2990, 3027, 3446],
    },
    {
      name: "Egli",
      type: "bar",
      stack: "total",
      data: [4341, 6585, 6980, 5845, 4868, 6118, 6247, 4728, 4228, 4957],
    },
    {
      name: "Wels",
      type: "bar",
      stack: "total",
      data: [562, 478, 642, 558, 1036, 701, 746, 739, 968, 895],
    },
    {
      name: "Rotauge",
      type: "bar",
      stack: "total",
      data: [958, 533, 994, 654, 451, 467, 551, 434, 471, 369],
    },
    {
      name: "Karpfen",
      type: "bar",
      stack: "total",
      data: [878, 635, 364, 392, 397, 201, 208, 295, 209, 151],
    },
    {
      name: "Übrige",
      type: "bar",
      stack: "total",
      data: [1764, 1542, 1141, 1118, 1149, 922, 657, 476, 632, 658],
    },
    {
      name: "Total",
      type: "bar",
      stack: "total", // Add stack property to group bars
      data: [
        16584, 17118, 98975, 15120, 13570, 17243, 20796, 13342, 14568, 13092,
      ],
    },
  ],
});
const chartRef = ref();

onMounted(() => {
  nextTick(() => {
    chartRef.value?.resize();
  });
});
</script>
