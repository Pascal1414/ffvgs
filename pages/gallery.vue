<template>
  <div class="flex flex-col items-center">
    <div class="form-control">
      <label class="floating-label mb-4 w-[260px]">
        <span>Bilder aus folgendem Jahr anzeigen:</span>
        <select v-model="year" class="select" name="mitgliedschaft" id="role">
          <option v-for="year in yearOptions" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </label>
    </div>
  </div>

  <div class="flex flex-col gap-4">
    <div
      v-for="n in 5"
      v-if="status === 'pending'"
      class="skeleton w-full h-[413px]"
    ></div>
  </div>
  <div v-for="(galeryItem, index) in galeryItems" :key="index">
    <div class="card card-sm w-full bg-base-200 shadow-xl mb-4">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-2">
          {{ galeryItem.name }} ({{
            toFormattedString(new Date(galeryItem.date))
          }})
        </h1>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4"
        >
          <div
            v-for="(image, index) in galeryItem.images"
            :key="index"
            @click="openPreviewModal(galeryItem.images, index)"
          >
            <CldImage
              class="rounded-md w-full"
              :src="image.url ?? ''"
              alt="img"
              :width="calculateImageSize(image.width, image.height).width"
              :height="calculateImageSize(image.width, image.height).height"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <dialog ref="preview_modal" class="modal">
    <div
      class="modal-box max-h-none max-w-none w-[90%] h-[80%] relative flex flex-col items-center"
    >
      <div class="w-full h-full">
        <template v-for="(image, index) in previewImages">
          <img
            v-if="index === previewImageIndex"
            class="object-contain w-full h-full"
            :src="image.url"
            alt=""
          />
        </template>
      </div>

      <button
        class="btn btn-primary absolute bottom-2 md:top-[50%] md:translate-y-[-50%]! left-2"
        @click="previous()"
      >
        <ClientOnly>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path>
          </svg>
        </ClientOnly>
      </button>
      <button
        class="btn btn-primary absolute bottom-2 md:top-[50%] md:translate-y-[-50%]! right-2"
        @click="next()"
      >
        <ClientOnly>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </ClientOnly>
      </button>

      <form @click.prevent="closePreviewModal()">
        <button class="btn absolute top-4 right-4">
          <ClientOnly>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              ></path>
            </svg>
          </ClientOnly>
        </button>
      </form>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import type { Galery } from '~/types/galery';
import type { ResImage } from '~/types/image';

const config = useRuntimeConfig();

const { data, status } = await useLazyFetch<{
  data: Galery[];
}>(config.public.apiUrl + '/galeries', {
  query: { populate: '*' },
});

const galeryItems = computed(() =>
  data.value?.data.filter((g) => year.value === new Date(g.date).getFullYear()),
);

const year = ref<number>();

const latestYear = computed(() => {
  if (!data.value?.data?.length) return null;

  return Math.max(
    ...data.value.data.map((g) => new Date(g.date).getFullYear()),
  );
});

watch(
  latestYear,
  (newYear) => {
    if (newYear && !year.value) {
      year.value = newYear;
    } else {
      year.value = new Date().getFullYear();
    }
  },
  { immediate: true },
);

const yearOptions = computed(() => {
  const years = data.value?.data.map((g) => new Date(g.date).getFullYear());
  return Array.from(new Set(years)).sort((a, b) => b - a);
});

function calculateImageSize(width: number, height: number) {
  const aspectRatio = width / height;
  const newWidth = 400;
  const newHeight = newWidth / aspectRatio;
  return { width: newWidth, height: newHeight };
}

/* Image Preview */
const preview_modal = ref<HTMLDialogElement | null>(null);
const previewImages = ref<ResImage[]>([]);
const previewImageIndex = ref<number>(0);

function openPreviewModal(images: ResImage[], currentIndex: number) {
  previewImageIndex.value = currentIndex;
  previewImages.value = images;
  preview_modal.value?.showModal();
}
function closePreviewModal() {
  previewImageIndex.value = 0;
  previewImages.value = [];

  preview_modal.value?.close();
}

function next() {
  previewImageIndex.value =
    (previewImageIndex.value + 1) % previewImages.value.length;
}
function previous() {
  previewImageIndex.value =
    (previewImageIndex.value - 1 + previewImages.value.length) %
    previewImages.value.length;
}
</script>

<style scoped></style>
