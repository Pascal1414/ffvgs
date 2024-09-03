<template>
  <div class="card w-full bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Kontakt</h1>

      <form method="POST" :action="config.public.formspree.contactFormUrl" class="form-control w-full">
        <label>
          <div class="label">
            Email
          </div>
          <input name="email" type="email" placeholder="Email" class="input input-bordered w-full" required />
        </label>

        <label>
          <div class="label">
            Nachricht
          </div>
          <textarea name="message" class="textarea textarea-bordered mb-2 w-full" placeholder="Nachricht"
            required></textarea>
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