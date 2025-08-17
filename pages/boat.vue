<template>
  <h1 class="text-4xl font-bold mb-4">Boot</h1>
  <div class="flex flex-col gap-3">
    <div class="grid card bg-base-200 rounded-box p-4 gap-1">
      <h2 class="text-2xl font-bold">Reservation</h2>
      <p>
        Das Vereinsboot darf ausschliesslich von Vereinsmitgliedern gebucht
        werden. Unbefugte Benutzung durch Drittpersonen wird strafrechtlich
        verfolgt! Mit der Buchung des Vereinsboots akzeptierst du automatisch
        die Benutzungsordnung, bitte lese sie sorgfältig durch! Du kannst sie
        <a
          class="link link-primary"
          href="documents/BenutzungsordnungVereinsboot.pdf"
          >hier</a
        >
        herunterladen.
      </p>

      <p>
        Eine angefragte Buchung gilt als gültige Reservation, auch ohne
        Bestätigung.
      </p>
    </div>

    <div role="alert" class="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <div class="flex justify-between w-full">
        <span> Bei Problemen an den Bootswart Ben wenden.</span>

        <a href="tel:076 437 50 58" class="btn btn-sm">
          <svg
            class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div role="alert" class="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>
        Das Vereinsboot ist momentan nicht eingewassert kann desswegen nicht
        benutzt werden.
      </span>
    </div>

    <div class="grid grow card bg-base-200 rounded-box p-4 w-full">
      <div class="flex row justify-between mb-4">
        <h2 class="text-2xl font-bold mb-2">Tarife:</h2>
        <label for="my-modal-6" class="btn btn-primary">Preisrechner</label>
      </div>

      <div class="flex flex-col w-full lg:flex-row">
        <div
          class="grid grow h-25 card bg-base-300 rounded-box place-items-center p-4"
        >
          <h3 class="text-1xl font-bold">Tagestarif (05:00 - 19:00 Uhr)</h3>
          <p>CHF 2.00 pro Stunde</p>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div
          class="grid grow h-25 card bg-base-300 rounded-box place-items-center p-4"
        >
          <h3 class="text-1xl font-bold">Nachttarif (19:00 - 05:00 Uhr)</h3>
          <p>CHF 1.00 pro Stunde</p>
        </div>
      </div>
    </div>
    <div class="card card-sm w-full bg-base-200 shadow-xl">
      <figure></figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-2">Kalender:</h2>

        <div
          id="zhcal-root"
          data-id="536b9e39c949c1b171e770be20b62960"
          data-lang="de"
        ></div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Preis berechnen</h3>
      <p>
        Beachte dass der berechnete Betrag nicht stimmen muss. Am besten
        nochmals überprüfen.
      </p>

      <form @submit.prevent="calculatePrice()" class="flex flex-col gap-3 mt-4">
        <label class="input w-full">
          <span class="label">Startzeit</span>
          <input
            type="time"
            v-model="startTime"
            placeholder="Startzeit"
            required
          />
        </label>

        <label class="input w-full">
          <span class="label">Endzeit</span>
          <input type="time" v-model="endTime" placeholder="Endzeit" required />
        </label>

        <button class="btn btn-primary mt-2">Berechnen</button>

        <div v-if="price">Preis: {{ price }} CHF</div>
      </form>

      <div class="modal-action">
        <label for="my-modal-6" class="btn">Schliessen</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

const startTime: Ref<String> = ref('');
const endTime: Ref<String> = ref('');
const price: Ref<Number> = ref(0);

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://app.calendarapp.de/loadcal.php';
  script.async = true;
  document.body.appendChild(script);
});

function calculatePrice() {
  console.log('calculating price');

  // Calculate duration of rental period in hours
  const start = new Date(`2000-01-01T${startTime.value}`);
  const end = new Date(`2000-01-01T${endTime.value}`);

  if (endTime.value < startTime.value) {
    end.setDate(end.getDate() + 1);
  }

  const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

  // loop trough each hour and calculate price
  let tmpPrice = 0;
  for (let i = 0; i < duration; i++) {
    const hour = start.getHours() + i;
    if (hour >= 5 && hour < 19) {
      tmpPrice += 2;
    } else {
      tmpPrice += 1;
    }
  }
  console.log('price', price);

  price.value = tmpPrice;
}
</script>

<style scoped>
/* 
.zhcal_header {
    background-color: #20252e !important;
    color: #e5e7eb !important;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}

.zhcal_intervall {
    background-color: #20252e !important;
    color: #e5e7eb !important;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
*/
</style>
