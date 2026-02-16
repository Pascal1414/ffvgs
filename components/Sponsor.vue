<template>
  <div class="hover-3d">
    <!-- content -->
    <figure class="w-50 h-fit rounded-2xl">
      <img :src="image" :alt="name" />
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
