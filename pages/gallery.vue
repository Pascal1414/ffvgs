<template>
  <div class="flex flex-col gap-4">
    <div v-for="n in 5" v-if="pending && galeryItems === null" class="skeleton w-[698px] h-[413px]"></div>

  </div>
  <div v-for="(galeryItem, index) in galeryItems" :key="index">
    <div class="card card-compact w-[100%] bg-base-200 shadow-xl mb-4">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-2">{{ galeryItem.name }} ({{ galeryItem.date }})</h1>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(image, index) in galeryItem.images" :key="index"
            @click="openPreviewModal(galeryItem.images, index)">
            <CldImage class="md:rounded-md w-full" :src="image.url" :alt="image.caption"
              :width="calculateImageSize(image.width, image.height).width"
              :height="calculateImageSize(image.width, image.height).height" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <dialog ref="preview_modal" class="modal">
    <div class="modal-box max-h-none max-w-none w-[90%] h-[80%]">
      <img class="md:rounded-md" :src="previewImages[previewImageIndex]?.url"
        :alt="previewImages[previewImageIndex]?.caption" />
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import type { AsyncData } from '#app'
import type { Galery } from '~/types/galery'
import type { ResImage } from '~/types/image';

const config = useRuntimeConfig()


const { data: galeryItems, pending } = await useLazyFetch(config.public.apiUrl + '/galeries', {
  query: { "populate": '*' },
  transform: (_galeryItems: AsyncData<any, any>) => {
    return sanitizeApiResponse(_galeryItems) as Galery[];
  }
})

function calculateImageSize(width: number, height: number) {
  const aspectRatio = width / height
  const newWidth = 600
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


</script>

<style scoped></style>
