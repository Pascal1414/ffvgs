<template>
  <div class="card w-full bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Beitrittserklärung</h1>
      <p>Sehr gerne möchten wir Sie in unseren Verein aufnehmen.</p>

      <form
        name="join-association"
        method="POST"
        :action="config.public.formspree.joinFormUrl"
        class="form-control w-full flex flex-col gap-3"
      >
        <div class="card w-full bg-base-300 shadow-xl">
          <div class="card-body gap-0">
            <p class="mb-2">Ich wünsche eine Aufnahme als:</p>

            <label
              v-for="(membership, index) in memberships"
              :key="index"
              class="label cursor-pointer gap-4 justify-start"
            >
              <input
                type="radio"
                name="membership"
                class="radio checked:bg-red-500"
              />
              <span class="label-text">{{
                membership.name +
                ' (' +
                membership.price +
                ') ' +
                membership.age
              }}</span>
            </label>
          </div>
        </div>

        <div class="split-cols grid grid-cols-2 gap-[15px] mb-0 mt-3">
          <div class="flex flex-col gap-3 mb-3">
            <label class="floating-label">
              <span>Vorname</span>
              <input
                name="firstname"
                type="text"
                placeholder="Vorname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Lastname</span>
              <input
                name="lastname"
                type="text"
                placeholder="Nachname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Geburtsdatum</span>
              <input
                name="birthdate"
                type="date"
                placeholder="Geburtsdatum"
                class="input w-full"
                required
              />
            </label>
          </div>
          <div class="flex flex-col gap-3">
            <label class="floating-label">
              <span>Strasse und Nummer</span>
              <input
                name="street"
                type="text"
                placeholder="Strasse und Nummer"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>PLZ</span>
              <input
                type="text"
                name="zip"
                placeholder="PLZ"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Ort</span>
              <input
                name="place"
                type="text"
                placeholder="Ort"
                class="input w-full"
                required
              />
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="floating-label">
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="input w-full"
              required
            />
          </label>

          <label class="floating-label">
            <span>Nachricht</span>
            <textarea
              name="message"
              class="textarea w-full"
              placeholder="Nachricht"
            ></textarea>
          </label>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Absenden</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const memberships = ref([
  {
    name: 'Junior',
    price: '100.00',
    age: '',
  },
  {
    name: 'Aktivmitglied',
    price: '175.00',
    age: '',
  },
  {
    name: 'Passivmitglied',
    price: '50.00',
    age: '',
  },
  {
    name: 'Veteran',
    price: '100.00',
    age: 'Aktivmitglied ab 65 Jahren',
  },
]);
</script>

<style scoped>
@reference '~/assets/css/main.css';

@media (max-width: 600px) {
  .split-cols {
    @apply grid-cols-1;
    @apply gap-0;
  }
}
</style>
