<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="font-semibold text-primary">{{ error?.statusCode }}</p>
      <h1 class="text-4xl font-bold">{{ error?.statusMessage }}</h1>
      <p class="mt-6">{{ error?.message }}</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
const error = useError()

</script>

<style lang="css">
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1% 0 10% 0;
}
</style>
