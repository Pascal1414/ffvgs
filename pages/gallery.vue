<template>
  <div class="flex flex-col items-center">

    <div class="form-control">
      <label for="role" class="label">
        <span class="label-text">Bilder aus folgendem Jahr anzeigen:</span>
      </label>
      <select v-model="year" class="select select-bordered max-w-xs mb-4" name="mitgliedschaft" id="role">
        <option v-for="year in getYearOptions()" :key="year" :value="year">
          {{ year }}</option>
      </select>
    </div>
  </div>

  <div class="flex flex-col gap-4">
    <div v-for="n in 5" v-if="pending && galeryItems === null" class="skeleton w-full h-[413px]"></div>
  </div>
  <div v-for="(galeryItem, index) in galeryItems" :key="index">
    <div v-if="shouldShowGalery(galeryItem)" class="card card-compact w-[100%] bg-base-200 shadow-xl mb-4">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-2">{{ galeryItem.name }} ({{ toFormattedString(new
          Date(galeryItem.date)) }})</h1>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(image, index) in galeryItem.images" :key="index"
            @click="openPreviewModal(galeryItem.images, index)">
            <CldImage class="md:rounded-md w-full" :src="image.url" alt="img"
              :width="calculateImageSize(image.width, image.height).width"
              :height="calculateImageSize(image.width, image.height).height" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <dialog ref="preview_modal" class="modal">
    <div class="modal-box max-h-none max-w-none w-[90%] h-[80%] relative flex flex-col items-center">
      <CldImage v-if="previewImages[previewImageIndex]" class="object-contain w-full h-full "
        :src="previewImages[previewImageIndex].url" alt="img"
        :width="calculateLargeImageSize(previewImages[previewImageIndex].width, previewImages[previewImageIndex].height).width"
        :height="calculateLargeImageSize(previewImages[previewImageIndex].width, previewImages[previewImageIndex].height).height" />
      <button class="btn absolute top-[50%] left-2" @click="previous()">
        <ClientOnly>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
            </path>
          </svg>
        </ClientOnly>
      </button>
      <button class="btn absolute top-[50%] right-2" @click="next()">
        <ClientOnly>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
            </path>
          </svg>
        </ClientOnly>
      </button>

      <form @click.prevent="closePreviewModal()">
        <button class="btn absolute top-4 right-4">
          <ClientOnly>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
              viewBox="0 0 16 16">
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z">
              </path>
            </svg>
          </ClientOnly>
        </button>
      </form>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import type { AsyncData } from '#app'
import type { Galery } from '~/types/galery'
import type { ResImage } from '~/types/image';

const config = useRuntimeConfig()

const year = ref(new Date().getFullYear())

const { data: galeryItems, pending } = await useLazyFetch(config.public.apiUrl + '/galeries', {
  query: { "populate": '*' },
  transform: (_galeryItems: AsyncData<any, any>) => {
    return sanitizeApiResponse(_galeryItems) as Galery[];
  },
})

function shouldShowGalery(galery: Galery): boolean {
  return year.value === new Date(galery.date).getFullYear()
}

function getYearOptions() {
  const years = galeryItems.value?.map(galery => new Date(galery.date).getFullYear());
  return Array.from(new Set(years)).sort((a, b) => b - a)
}

function calculateImageSize(width: number, height: number) {
  const aspectRatio = width / height
  const newWidth = 400
  const newHeight = newWidth / aspectRatio
  return { width: newWidth, height: newHeight }
}

function calculateLargeImageSize(width: number, height: number) {
  const aspectRatio = width / height
  const newWidth = 1200
  const newHeight = newWidth / aspectRatio
  return { width: newWidth, height: newHeight }
}

/* Image Preview */
const preview_modal = ref<HTMLDialogElement | null>(null)
const previewImages = ref<ResImage[]>([])
const previewImageIndex = ref<number>(0)

function openPreviewModal(images: ResImage[], currentIndex: number) {
  previewImageIndex.value = currentIndex
  previewImages.value = images
  preview_modal.value?.showModal()
}
function closePreviewModal() {
  previewImageIndex.value = 0;
  previewImages.value = []

  preview_modal.value?.close()
}

function next() {
  previewImageIndex.value = (previewImageIndex.value + 1) % previewImages.value.length
}
function previous() {
  previewImageIndex.value = (previewImageIndex.value - 1 + previewImages.value.length) % previewImages.value.length
}


</script>

<style scoped></style>
