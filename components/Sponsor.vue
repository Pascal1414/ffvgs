<template>
  <div class="hover-3d">
    <!-- content -->
    <figure class="h-40 w-60 p-6 rounded-2xl flex  items-center">
      <img :src="image" :alt="name" class="w-full" />
    </figure>
    <!-- 8 empty divs needed for the 3D effect -->
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  image: string;
}>();
</script>

<style></style>
