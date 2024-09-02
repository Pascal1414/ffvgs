<template>
  <div class="card w-[100%] bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Kontakt</h1>
      <form name="contact" method="POST" :action="config.public.formspree.contactFormUrl">
        <div class="form-control w-full">
          <label class="label" for="contact-email">
            <span class="label-text">Email</span>
          </label>
          <input id="contact-email" name="email" type="email" placeholder="Email" class="input input-bordered w-full"
            required />

          <label class="label" for="contact-message">
            <span class="label-text">Nachricht</span>
          </label>
          <textarea id="contact-message" name="message" class="textarea textarea-bordered mb-2" placeholder="Nachricht"
            required></textarea>

          <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>
        </div>
      </form>
    </div>
  </div>

  <div class="card w-[100%] bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Beitrittserklärung</h1>
      <p>Sehr gerne möchten wir Sie in unseren Verein aufnehmen.</p>
      <form name="join-association" method="POST" :action="config.public.formspree.joinFormUrl">
        <div class="card w-[100%] bg-base-300 shadow-xl">
          <div class="card-body gap-0">
            <p class="mb-2">Ich wünsche eine Aufnahme als:</p>

            <div v-for="(membership, index) in memberships" :key="index" class="form-control mb-0">
              <label class="label cursor-pointer justify-start">
                <input type="radio" name="membership" class="radio checked:bg-red-500" required
                  :value="membership.name" />
                <span class="label-text ml-4">{{
                  membership.name + ' (' + membership.price + ') ' + membership.age
                }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="split-cols grid grid-cols-2 gap-[15px] mb-0 mt-3">
          <div class="mb-0">
            <label class="label" for="join-firstname">
              <span class="label-text">Vorname</span>
            </label>
            <input id="join-firstname" name="firstname" type="text" placeholder="Vorname"
              class="input input-bordered w-full" required />

            <label class="label" for="join-lastname">
              <span class="label-text">Lastname</span>
            </label>
            <input id="join-lastname" name="lastname" type="text" placeholder="Nachname"
              class="input input-bordered w-full" required />

            <label class="label" for="join-birthdate">
              <span class="label-text">Geburtsdatum</span>
            </label>
            <input id="join-birthdate" name="birthdate" type="date" placeholder="Geburtsdatum"
              class="input input-bordered w-full" required />
          </div>
          <div class="mb-0">
            <label class="label" for="join-street">
              <span class="label-text">Strasse und Nummer</span>
            </label>
            <input id="join-street" name="street" type="text" placeholder="Strasse und Nummer"
              class="input input-bordered w-full" required />

            <label class="label" for="join-zip">
              <span class="label-text">PLZ</span>
            </label>
            <input id="join-zip" type="text" name="zip" placeholder="PLZ" class="input input-bordered w-full"
              required />

            <label class="label" for="join-place">
              <span class="label-text">Ort</span>
            </label>
            <input id="join-place" name="place" type="text" placeholder="Ort" class="input input-bordered w-full"
              required />
          </div>
        </div>
        <div class="mb-2">
          <label class="label" for="join-email">
            <span class="label-text">Email</span>
          </label>
          <input id="join-email" name="email" type="email" placeholder="Email" class="input input-bordered w-full"
            required />

          <label class="label" for="join-message">
            <span class="label-text">Nachricht</span>
          </label>
          <textarea id="join-message" name="message" class="textarea textarea-bordered w-full"
            placeholder="Nachricht"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>
      </form>
    </div>
  </div>

  <div class="card w-[100%] bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Anmeldung Lungerersee</h1>

      <form name="event-registration" method="POST" :action="config.public.formspree.eventRegistration"
        id="registration-lungerersee">
        <div class="form-control w-full">
          <label class="label" for="er-firstname">
            <span class="label-text">Vorname *</span>
          </label>
          <input id="er-firstname" name="firstname" type="text" placeholder="Vorname"
            class="input input-bordered w-full" required />

          <label class="label" for="er-lastname">
            <span class="label-text">Nachname *</span>
          </label>
          <input id="er-lastname" name="lastname" type="text" placeholder="Nachname" class="input input-bordered w-full"
            required />

          <label class="label" for="er-email">
            <span class="label-text">Email *</span>
          </label>
          <input id="er-email" name="email" type="email" placeholder="Email" class="input input-bordered w-full"
            required>

          <label class="label" for="er-notes">
            <span class="label-text">Anmerkungen</span>
          </label>
          <textarea id="er-notes" name="notes" class="textarea textarea-bordered mb-2"
            placeholder="Anmerkungen"></textarea>
          <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>

        </div>
      </form>
    </div>
  </div>



  <form name="event-registration" method="POST" netlify-honeypot="bot-field" data-netlify="true" netlify hidden>
    <input id="er-firstname" name="firstname" type="text" />
    <input id="er-lastname" name="lastname" type="text" />
    <input id="er-email" name="email" type="email">
    <textarea id="er-notes" name="notes"></textarea>
  </form>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

const config = useRuntimeConfig();

const memberships = ref([
  {
    name: 'Jungfischer',
    price: '50.00',
    age: 'bis 14 Jahren'
  },
  {
    name: 'Junior',
    price: '50.00',
    age: 'ab 14 Jahren'
  },
  {
    name: 'Aktivmitglied',
    price: '120.00',
    age: ''
  },
  {
    name: 'Passivmitglied',
    price: '50.00',
    age: ''
  },
  {
    name: 'Veteran',
    price: '70.00',
    age: 'Aktivmitglied ab 65 Jahren'
  }
])


</script>

<style scoped>
@media (max-width: 600px) {
  .split-cols {
    @apply grid-cols-1;
    @apply gap-0;
  }
}
</style>
