<template>
  <div class="card w-[100%] bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Anmeldung Plauschfischen</h1>

      <form method="POST" :action="config.public.formspree.eventRegistration" class="form-control w-full">
        <input type="text" name="_gotcha" class="hidden" />
        <label>
          <div class="label">
            Vorname *
          </div>
          <input name="firstname" type="text" placeholder="Vorname" class="input input-bordered w-full" required />
        </label>

        <label>
          <div class="label">
            Nachname *
          </div>
          <input name="lastname" type="text" placeholder="Nachname" class="input input-bordered w-full" required />
        </label>

        <label>
          <div class="label">
            Email *
          </div>
          <input name="email" type="email" placeholder="Email" class="input input-bordered w-full" required>
        </label>

        <label>
          <div class="label">
            Geburtsdatum (Für Patent) *
          </div>
          <input name="birthdate" type="date" placeholder="Geburtsdatum" class="input input-bordered w-full" required>
        </label>

        <label>
          <div class="label">
            Anmerkungen
          </div>
          <textarea name="notes" class="textarea textarea-bordered mb-2 w-full" placeholder="Anmerkungen"></textarea>
        </label>

        <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

</script>

<style scoped>
label {
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply label-text;
}
</style>