<template>
  <div class="flex flex-col gap-4">
    <div v-for="n in 5" v-if="pending && galeryItems === null" class="skeleton w-[698px] h-[413px]"></div>

  </div>
  <div v-for="(galeryItem, index) in galeryItems" :key="index">
    <div class="card card-compact w-[100%] bg-base-200 shadow-xl mb-4">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-2">{{ galeryItem.name }} ({{ galeryItem.date }})</h1>
        <div class="grid grid-cols-3 gap-4">
          <label v-for="(image, index) in galeryItem.images" for="my-modal-5" :key="index" @click="() => {/*
    previewImageArray = []
  galeryItem.images.forEach((group) => {
      group.forEach((image) => {
        previewImageArray.push(image)
      })
    })
    previewImageIndex = index*/
    }
      ">
            <img class="md:rounded-md" :src="image.url" :alt="image.caption" />
          </label>
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box max-w-[100%] w-[100%] flex row h-[100%] bg-transparent">
      <button class="btn btn-square btn-primary absolute top-[50%] !translate-y-[-50%] left-[2%]" @click="previous()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      <img class="object-contain ml-auto mr-auto max-w-[80%]" v-if="previewImageArray[previewImageIndex]"
        :src="previewImageArray[previewImageIndex].url" />
      <button class="btn btn-square btn-primary absolute top-[50%] !translate-y-[-50%] right-[2%]" @click="next()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <label for="my-modal-5" class="btn btn-square btn-primary absolute top-[10px] right-[2%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
          viewBox="0 0 16 16">
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { AsyncData } from '#app'
import type { Ref } from 'vue'
import type { Galery } from '~/types/galery'

const config = useRuntimeConfig()

const { data: galeryItems, pending } = await useLazyFetch(config.public.apiUrl + '/galeries', {
  query: { "populate": '*' },
  transform: (_galeryItems: AsyncData<any, any>) => {
    return sanitizeApiResponse(_galeryItems) as Galery[];
  }
})

const previewImageArray = ref([
  { url: '', caption: '' }
])
const previewImageIndex: Ref<number> = ref(-1)

function previous() {
  if (previewImageIndex.value > 0) previewImageIndex.value = previewImageIndex.value - 1
  else previewImageIndex.value = previewImageArray.value.length - 1
}
function next() {
  if (previewImageIndex.value < previewImageArray.value.length - 1)
    previewImageIndex.value = previewImageIndex.value + 1
  else previewImageIndex.value = 0
}

</script>

<style scoped></style>
