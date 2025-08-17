<template>
  <div class="hero min-h-120">
    <div
      class="hero-content flex-col w-full text-center lg:text-start lg:gap-12"
      :class="{
        'lg:flex-row-reverse': reversed,
        'lg:flex-row': !reversed,
        'lg:justify-between': reversed,
        'lg:justify-start': !reversed,
      }"
    >
      <img
        v-if="props.images?.length == 1"
        :src="props.images?.[0]"
        class="w-full max-w-sm rounded-lg shadow-2xl"
      />
      <div v-else>
        <Slideshow :images="getImagesForSlideshow()" class="slideshow" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Slideshow from './Slideshow.vue';

const props = defineProps({
  images: {
    type: Array<string>,
    required: true,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
});

function getImagesForSlideshow() {
  return props.images.map((image: string) => {
    return {
      src: image,
      alt: 'Hero image',
    };
  });
}
</script>

<style scoped>
@reference '~/assets/css/main.css';

.slideshow:deep(div) {
  @apply max-w-sm;
}
</style>
