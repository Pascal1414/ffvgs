<template>
  <div class="card w-full bg-base-200 shadow-xl mb-4">
    <div class="card-body">
      <h1 class="text-2xl font-bold">Kontakt</h1>

      <form
        method="POST"
        :action="config.public.formspree.contactFormUrl"
        class="w-full flex flex-col gap-3"
      >
        <label class="floating-label">
          <span>Email</span>
          <input name="email" type="email" class="input w-full" required />
        </label>

        <label class="floating-label">
          <span>Nachricht</span>
          <textarea
            name="message"
            class="textarea w-full"
            placeholder="Nachricht"
            required
          ></textarea>
        </label>

        <button type="submit" class="btn btn-primary">Absenden</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<style scoped></style>
