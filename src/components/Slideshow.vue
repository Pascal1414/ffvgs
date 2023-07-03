<template>
  <div>
    <div class="carousel w-full">
      <div v-for="(image, index) in images" :key="index" :id="index.toString()" class="carousel-item w-full">
        <img :src="image.src" class="w-full" />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a v-for="(image, index) in images" :key="index" :href="'#' + index" class="btn btn-xs">{{ index + 1 }}</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SlideShow',
  props: {
    images: {
      type: Array as () => Array<{ src: string; alt: string }>,
      required: true
    }
  },
  methods: {}
}
</script>
