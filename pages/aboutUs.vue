<template>
  <div>
    <div>
      <h1 class="text-4xl font-bold mb-7 flex justify-center">Vorstand</h1>
      <div class="grid grid-col-1 md:grid-cols-2 gap-6">
        <div
          v-if="boardStatus === 'pending' && boardPersons === null"
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
            <h2 class="card-title">{{ person.name }}</h2>
            <p>{{ person.function }}</p>
            <div class="card-actions">
              <a v-if="person.tel" :href="'tel:' + person.tel">
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"
                  />
                </svg>
              </a>
              <a v-if="person.email" :href="'mailto:' + person.email">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path
                    d="M142.152 901.978q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865V318.152q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152ZM480 601.652l-337.848-223v455.196h675.696V378.652L480 601.652Zm0-65.5 333.848-218H147.152l332.848 218Zm-337.848-157.5v-60.5 515.696-455.196Z"
                  />
                </svg>
              </a>
            </div>
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
          v-if="vipsStatus === 'pending' && vips === null"
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
