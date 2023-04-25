<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar>
    <main class="mx-auto w-[65%] mt-4 mb-4">
      <RouterView />
    </main>

    <footer class="footer p-10 bg-base-300 text-base-content">
      <div>
        <span class="footer-title">Links</span>
        <router-link to="/impressum">Impressum</router-link>
        <router-link to="/dokumente">Dokumente</router-link>
      </div>
      <div>
        <span class="footer-title">Events</span>
        <router-link to="/event/jungfischerkurs">Jungfischerkurs</router-link>
        <router-link to="/event/sommernachtsfest">Sommernachtsfest</router-link>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-cols-2  gap-4">

          <a href="https://www.facebook.com/FFVGS/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" class="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
              </path>
            </svg></a>
          <a href="https://github.com/Pascal1414/ffvgs">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
              class="inline-block h-5 w-5 fill-current md:h-6 md:w-6">
              <path
                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z">
              </path>
            </svg>
          </a>
          <label class="swap">

            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />

            <!-- volume on icon -->
            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24"
              height="24">

              <g>
                <circle fill-rule="evenodd" clip-rule="evenodd" cx="32.003" cy="32.005" r="16.001" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4
		s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656
		c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4
		s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004
		s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.006,27.997l-4.009,0.008
		c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4
		C64.002,29.79,62.217,27.997,60.006,27.997z" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657
		c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4
		c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004
		c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653
		L12.212,17.855z" />
              </g>

            </svg>

            <!-- volume off icon -->
            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path
                d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>

          </label>

        </div>
        <!-- <select class="opacity-0" @change="updateTheme($event)">
          <option>light</option>
          <option>dark</option>
          <option>synthwave</option>
          <option>retro</option>
          <option>cyberpunk</option>
                                <option>aqua</option>
                                <option>wireframe</option>
                                <option>luxury</option>
                              </select> -->

      </div>
    </footer>

  </NavBar>
</template>
<script lang="ts">
export default {
  methods: {
    // updateTheme($event: any) {
    //   document.documentElement.setAttribute('data-theme', $event.target.value);
    // }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

@media (max-width: 768px) {
  main {
    @apply w-full;
    @apply pr-4;
    @apply pl-4;
  }


}
</style>
