<template>
  <VChart ref="chartRef" :option="option" style="width: 100%; height: 400px" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

var option = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
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
  ],
  itemStyle: { borderRadius: 3 },
  yAxis: [
    {
      type: "value",
      name: "Fangmenge",
    },
  ],
  series: [
    {
      name: "Felchen",
      type: "bar",
      data: [5975, 4845, 2943, 3949, 3208, 6250, 9086, 3680, 5033, 2616],
    },
    {
      name: "Hecht",
      type: "bar",
      data: [2106, 2500, 2398, 2604, 2461, 2584, 3301, 2990, 3027, 3446],
    },
    {
      name: "Egli",
      type: "bar",
      data: [4341, 6585, 6980, 5845, 4868, 6118, 6247, 4728, 4228, 4957],
    },
    {
      name: "Wels",
      type: "bar",
      data: [562, 478, 642, 558, 1036, 701, 746, 739, 968, 895],
    },
    {
      name: "Rotauge",
      type: "bar",
      data: [958, 533, 994, 654, 451, 467, 551, 434, 471, 369],
    },
    {
      name: "Karpfen",
      type: "bar",
      data: [878, 635, 364, 392, 397, 201, 208, 295, 209, 151],
    },
    {
      name: "Übrige",
      type: "bar",
      data: [1764, 1542, 1141, 1118, 1149, 922, 657, 476, 632, 658],
    },
    {
      name: "Total",
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
