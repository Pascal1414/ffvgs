<template>
  <h1 class="text-4xl font-bold mb-4">Boot</h1>
  <div class="flex flex-col gap-3">
    <div class="grid card bg-base-200 rounded-box p-4 gap-1">
      <h2 class="text-2xl font-bold">Reservation</h2>
      <p>
        Das Vereinsboot darf ausschliesslich von Vereinsmitgliedern gebucht werden. Unbefugte
        Benutzung durch Drittpersonen wird strafrechtlich verfolgt! Mit der Buchung des Vereinsboots
        akzeptierst du automatisch die Benutzungsordnung, bitte lese sie sorgfältig durch! Du kannst
        sie
        <a class="link link-primary" href="documents/BenutzungsordnungVereinsboot.pdf">hier</a>
        herunterladen.
      </p>

      <p>Eine angefragte Buchung gilt als gültige Reservation, auch ohne Bestätigung.</p>
    </div>
    <div class="alert shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <p>Bei Problemen an den Bootswart Ben wenden.</p>
        </div>
      </div>
      <div class="flex-none">
        <a href="tel:076 437 50 58" class="btn btn-sm">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
          </svg>
        </a>
      </div>
    </div>

    <div class="grid flex-grow card bg-base-200 rounded-box p-4 w-[100%]">
      <div class="flex row justify-between mb-4">
        <h2 class="text-2xl font-bold mb-2">Tarife:</h2>
        <label for="my-modal-6" class="btn">Preisrechner</label>
      </div>

      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-25 card bg-base-300 rounded-box place-items-center p-4">
          <h3 class="text-1xl font-bold">Tagestarif (05:00 - 19:00 Uhr)</h3>
          <p>CHF 2.00 pro Stunde</p>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div class="grid flex-grow h-25 card bg-base-300 rounded-box place-items-center p-4">
          <h3 class="text-1xl font-bold">Nachttarif (19:00 - 05:00 Uhr)</h3>
          <p>CHF 1.00 pro Stunde</p>
        </div>
      </div>
    </div>
    <div class="card card-compact w-[100%] bg-base-200 shadow-xl">
      <figure></figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-2">Kalender:</h2>

        <div id="zhcal-root" data-id="536b9e39c949c1b171e770be20b62960" data-lang="de"></div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Preis berechnen</h3>
      <p>Beachte dass der berechnete Betrag nicht stimmen muss. Am besten nochmals überprüfen.</p>

      <form @submit.prevent="calculatePrice($event)">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Startzeit</span>
          </label>
          <input type="time" v-model="startTime" placeholder="Startzeit" class="input input-bordered w-full max-w-xs"
            required />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Endzeit</span>
          </label>
          <input type="time" v-model="endTime" placeholder="Endzeit" class="input input-bordered w-full max-w-xs"
            required />
        </div>

        <button class="btn btn-primary mt-4">Berechnen</button>

        <div v-if="price">Preis: {{ price }} CHF</div>
      </form>

      <div class="modal-action">
        <label for="my-modal-6" class="btn">Schliessen</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BoatView',
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://app.calendarapp.de/loadcal.php'
    script.async = true
    document.body.appendChild(script)
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      pricePerHour: 0,
      price: 0
    }
  },
  methods: {
    calculatePrice(event: Event) {
      console.log('calculating price')

      // Calculate duration of rental period in hours
      const start = new Date(`2000-01-01T${this.startTime}`)
      const end = new Date(`2000-01-01T${this.endTime}`)

      if (this.endTime < this.startTime) {
        end.setDate(end.getDate() + 1)
      }

      const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60)

      // loop trough each hour and calculate price
      let price = 0
      for (let i = 0; i < duration; i++) {
        const hour = start.getHours() + i
        if (hour >= 5 && hour < 19) {
          price += 2
        } else {
          price += 1
        }
      }
      this.price = price
    }
  }
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
