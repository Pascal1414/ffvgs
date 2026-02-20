<template>
  <div>
    <div>
      <h1 class="text-4xl font-bold mb-7 flex justify-center">Vorstand</h1>
      <div class="grid grid-col-1 md:grid-cols-2 gap-6">
        <div
          v-if="boardStatus === 'pending'"
          v-for="n in 5"
          class="skeleton h-[335px] w-full"
        ></div>

        <div
          class="card card-side bg-base-200"
          v-for="(person, index) in boardPersons"
          :key="index"
        >
          <figure class="w-1/2">
            <img :src="person.image?.url" alt="Image" />
          </figure>
          <div class="card-body w-1/2">
            <h2 class="card-title text-2xl">{{ person.name }}</h2>
            <p>{{ person.function }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-4xl font-bold mt-15 mb-7 flex justify-center">
        VIPs – Funktionäre und Ehrenmitglieder
      </h1>
      <div class="grid grid-col-1 md:grid-cols-2 gap-4">
        <div
          v-if="vipsStatus === 'pending'"
          v-for="n in 6"
          class="skeleton h-[132px] w-full"
        ></div>
        <div
          v-for="(vip, index) in vips"
          :key="index"
          class="card card-side bg-base-200"
        >
          <figure class="h-[132px] w-[99px]">
            <img :src="vip.image?.url" alt="Profile" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ vip.name }}</h2>
            <p>{{ vip.function }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BoardPerson } from '~/types/board-person';
import type { Vip } from '~/types/vip';

const config = useRuntimeConfig();

const { data: boardData, status: boardStatus } = await useLazyFetch<{
  data: BoardPerson[];
}>(config.public.apiUrl + '/board-people', {
  query: {
    populate: '*',
  },
});

const boardPersons = computed(() =>
  boardData.value
    ? boardData.value.data.sort((a: any, b: any) => a.priority - b.priority)
    : [],
);

const { data: vipsData, status: vipsStatus } = await useLazyFetch<{
  data: Vip[];
}>(config.public.apiUrl + '/vips', {
  query: {
    populate: '*',
  },
});

const vips = computed(() => (vipsData.value ? vipsData.value.data : []));
</script>

<style scoped></style>
