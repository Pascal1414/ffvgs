<template>
  <div class="card w-full bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Beitrittserklärung</h1>
      <p>Sehr gerne möchten wir Sie in unseren Verein aufnehmen.</p>

      <form
        name="join-association"
        method="POST"
        :action="config.public.formspree.joinFormUrl"
        class="form-control w-full"
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
                " (" +
                membership.price +
                ") " +
                membership.age
              }}</span>
            </label>
          </div>
        </div>

        <div class="split-cols grid grid-cols-2 gap-[15px] mb-0 mt-3">
          <div>
            <label>
              <div class="form-label">Vorname</div>
              <input
                name="firstname"
                type="text"
                placeholder="Vorname"
                class="input input-bordered w-full"
                required
              />
            </label>

            <label>
              <div class="form-label">Lastname</div>
              <input
                name="lastname"
                type="text"
                placeholder="Nachname"
                class="input input-bordered w-full"
                required
              />
            </label>

            <label>
              <div class="form-label">Geburtsdatum</div>
              <input
                name="birthdate"
                type="date"
                placeholder="Geburtsdatum"
                class="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div>
            <label>
              <div class="form-label">Strasse und Nummer</div>
              <input
                name="street"
                type="text"
                placeholder="Strasse und Nummer"
                class="input input-bordered w-full"
                required
              />
            </label>

            <label>
              <div class="form-label">PLZ</div>
              <input
                type="text"
                name="zip"
                placeholder="PLZ"
                class="input input-bordered w-full"
                required
              />
            </label>

            <label>
              <div class="form-label">Ort</div>
              <input
                name="place"
                type="text"
                placeholder="Ort"
                class="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div class="mb-2">
          <label>
            <div class="form-label">Email</div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="input input-bordered w-full"
              required
            />
          </label>

          <label>
            <div class="form-label">Nachricht</div>
            <textarea
              name="message"
              class="textarea textarea-bordered w-full"
              placeholder="Nachricht"
            ></textarea>
          </label>
        </div>
        <button type="submit" class="btn btn-primary mt-3 max-w-xs">
          Absenden
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const memberships = ref([
  {
    name: "Junior",
    price: "100.00",
    age: "ab 14 Jahren",
  },
  {
    name: "Aktivmitglied",
    price: "175.00",
    age: "",
  },
  {
    name: "Passivmitglied",
    price: "50.00",
    age: "",
  },
  {
    name: "Veteran",
    price: "100.00",
    age: "Aktivmitglied ab 65 Jahren",
  },
]);
</script>

<style scoped>
.form-label {
  @apply label;
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply label-text;
}

@media (max-width: 600px) {
  .split-cols {
    @apply grid-cols-1;
    @apply gap-0;
  }
}
</style>
