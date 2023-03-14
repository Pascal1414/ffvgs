<script setup lang="ts">
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
  margin: 6px 4%;
  max-width: calc(1000px - 2*10px);

}

@media (min-width: 1000px) {
  main {
    margin: 6px auto;
  }
}
</style>
