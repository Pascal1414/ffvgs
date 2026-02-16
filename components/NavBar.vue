<template>
  <nav class="navbar justify-between bg-base-300 rounded-none!">
    <div class="navbar-start w-auto">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
          ref="navButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <!-- Mobile Nav Items -->
        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 z-1 p-2 shadow bg-base-300 rounded-box w-52"
        >
          <li
            v-for="(navItem, index) in navItems"
            :key="index"
            @click="closeNav()"
          >
            <router-link :to="navItem.link">{{ navItem.name }}</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost text-xl">
        <img src="/favicon.ico" alt="Logo" class="w-10 h-10" />
        <h1>FFVGS</h1>
      </router-link>
    </div>
    <div class="navbar-end w-auto hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-1">
        <li v-for="(navItem, index) in navItems" :key="index">
          <router-link :to="navItem.link">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <!-- Invisible button for removing focus from the dropdown -->
  <button ref="ghostBtn" />
</template>
<script lang="ts" setup>
const navItems = [
  { name: 'Programm', link: '/program' },
  { name: 'Über uns', link: '/aboutUs' },
  { name: 'Fischerei', link: '/greifensee' },

  { name: 'Jugend', link: '/young' },
  { name: 'Berichte', link: '/report' },
  { name: 'Galerie', link: '/gallery' },
  { name: 'Kontakt', link: '/contact' },
  { name: 'Boot', link: '/boat' },
];

const ghostBtn = ref<HTMLElement | null>(null);

function closeNav() {
  ghostBtn.value?.focus();
}
</script>
<style scoped></style>
