<template>
<div class="carousel w-full">
  <div v-for="(image, index) in images" :id="index.toString()" class="carousel-item w-full">
    <img :src="image.src" class="w-full" />
  </div> 
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a v-for="(image, index) in images" :href="'#' + index" class="btn btn-xs">{{ index + 1 }}</a> 
</div>

</template>

<script lang="ts">

export default {
    name: 'Slideshow',
    props: {
        images: {
            type: Array as () => Array<{ src: string, alt: string }>,
            required: true,
        },
    },
    methods:{
    }
};
</script>

