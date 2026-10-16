<template>
  <div class="card w-full bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Beitrittserklärung Jugendgruppe</h1>
      <p>Sehr gerne möchten wir Ihr Kind in unsere Jugendgruppe aufnehmen.</p>

      <div role="alert" class="alert alert-info alert-soft">
        <span
          >Bitte beachten Sie, dass die Bearbeitung Ihrer Anfrage 2-3 Wochen
          dauern kann.</span
        >
      </div>

      <form
        name="join-youth-group"
        method="POST"
        :action="config.public.formspree.joinFormUrl"
        class="fieldset"
      >
        <input type="hidden" name="membership" value="Jungfischer" />

        <h2 class="text-lg font-semibold mt-3 mb-1">Gesetzliche Vertretung</h2>
        <div class="split-cols grid grid-cols-2 gap-3 mb-3">
          <label class="floating-label">
            <span>Vorname</span>
            <input
              name="parent_firstname"
              type="text"
              placeholder="Vorname"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Nachname</span>
            <input
              name="parent_lastname"
              type="text"
              placeholder="Nachname"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Adresse</span>
            <input
              name="parent_address"
              type="text"
              placeholder="Adresse"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Email</span>
            <input
              name="parent_email"
              type="email"
              placeholder="Email"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Telefon</span>
            <input
              name="parent_phone"
              type="tel"
              placeholder="Telefon"
              class="input w-full"
              required
            />
          </label>
        </div>

        <h2 class="text-lg font-semibold mt-3 mb-1">Jungfischer</h2>
        <div class="split-cols grid grid-cols-2 gap-3 mb-3">
          <label class="floating-label">
            <span>Vorname</span>
            <input
              name="child_firstname"
              type="text"
              placeholder="Vorname"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Nachname</span>
            <input
              name="child_lastname"
              type="text"
              placeholder="Nachname"
              class="input w-full"
              required
            />
          </label>
          <label class="floating-label">
            <span>Geburtsdatum</span>
            <input
              name="child_birthdate"
              type="date"
              placeholder="Geburtsdatum"
              class="input w-full"
              required
            />
          </label>
        </div>

        <div class="flex flex-col gap-3">
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
</script>

<style scoped>
@reference '~/assets/css/main.css';

@media (max-width: 600px) {
  .split-cols {
    @apply grid-cols-1;
  }
}
</style>
