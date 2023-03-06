<script setup lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>

  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
main{
  margin: 6px;
} 
</style>
