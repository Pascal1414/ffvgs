<script setup lang="ts">
import Footer from './components/Footer.vue';
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li> <router-link class="nav-item" to="/programm">Programm</router-link></li>
          <li> <router-link class="nav-item" to="/ueber-uns">Organe</router-link> </li>
          <li> <router-link class="nav-item" to="/jugend">Jugend</router-link> </li>
          <li> <router-link class="nav-item" to="/bericht">Berichte</router-link> </li>
          <li><router-link class="nav-item" to="/galerie">Galerie</router-link> </li>
          <li> <router-link class="nav-item" to="/kontakt">Kontakt</router-link> </li>
          <li> <router-link class="nav-item" to="/boot">Boot</router-link></li>
        </ul>
      </div>
    </div>
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
  margin: 6px 2.5%;
  max-width: calc(1000px - 2*10px);

}

@media (min-width: 1000px) {
  main {
    margin: 6px auto;
  }
}
</style>
