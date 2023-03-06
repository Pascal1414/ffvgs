<script setup lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/Footer.vue';
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <header>
    <NavMenu />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
main {
  margin: 6px;
}
</style>
