<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar !rounded-none bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <client-only>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg>
            </client-only>
          </label>
        </div>
        <router-link to="/" class="flex-1 px-2 mx-2">
          <img src="/favicon.ico" alt="Logo" class="w-10 h-10 mr-3" />
          <h1>FFVGS</h1>
        </router-link>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li v-for="(navItem, index) in navItems" :key="index">
              <router-link :to="navItem.link">{{ navItem.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li v-for="(navItem, index) in navItems" :key="index">
          <router-link :to="navItem.link">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const navItems = [
  { name: 'Programm', link: '/program' },
  { name: 'Organe', link: '/aboutUs' },
  { name: 'Jugend', link: '/young' },
  { name: 'Berichte', link: '/report' },
  { name: 'Galerie', link: '/gallery' },
  { name: 'Kontakt', link: '/contact' },
  { name: 'Boot', link: '/boat' }
]

</script>
<style scoped>
@media (min-width: 1024px) {
  .navbar {
    @apply rounded-box;
  }
}
</style>
