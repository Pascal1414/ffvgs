<template>
  <NuxtLayout>

    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="font-semibold text-primary">{{ error?.statusCode }}</p>
        <h1 v-if="error == undefined">Es ist ein undefinierter Fehler aufgetreten.</h1>
        <h1 v-else-if="error.statusCode >= 500 && error?.statusCode < 600" class="text-4xl font-bold">Es tut uns leid es
          ist ein Fehler aufgetreten.
        </h1>
        <h1 v-else class="text-4xl font-bold">{{ error.statusMessage }}</h1>
        <p class="mt-6">Denken sie der Fehler sollte nicht auftreten, melden sie ihn gerne über das <RouterLink
            to="contact" class="link link-primary">Kontaktformular</RouterLink>.<br />
          Senden sie bitte die Url: "https://www.ffvgs.ch/..." mit.</p>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

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
