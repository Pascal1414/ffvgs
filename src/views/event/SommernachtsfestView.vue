<script setup lang="ts">
import NotHappenAlert from '@/components/NotHappenAlert.vue'

</script>
<template>
  <h1 class="text-4xl font-bold mb-4">Sommernachtsfest</h1>

  <NotHappenAlert name-string="das Sommernachtsfest" />

  <div class="flex flex-col w-full lg:flex-row">
    <div class="grid lg:w-[50%] flex-grow  card bg-base-300 rounded-box place-items-center">

      <div class="card  text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Samstag</h2>
          <p>Am Samstag öffnen wir unsere Fischküche, an deren Theke feine Zanderfilets im Bierteig gebacken werden. Sie
            sind in der Regel bis 22 Uhr erhältlich. Für jene Gäste, die lieber Grilladen geniessen, gibt es Würste oder
            Steaks vom Grill. Auch Pommes Frites werden frisch zubereitet. Dazu bietet unsere Theke im Festzelt vielerlei
            passende Getränke sowie Kaffee.</p>
          <p>
            Weil ein sommerliches Fest am See eine fröhliche Sache ist, sorgen wir auch für musikalische Unterhaltung. Am
            Abend spielt eine Band zum Tanz auf.
          </p>

        </div>
      </div>
    </div>

    <div class="divider lg:divider-horizontal"></div>

    <div class="grid lg:w-[50%] flex-grow card bg-base-300 rounded-box place-items-center">
      <div class="card  text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Sonnatg</h2>
          <p>Auch am Sonntag gibt es die zarten Fischfilets und die Grilladen, so lange, bis wir ausverkauft sind. </p>
          <p> Am Sonntagvormittag ab 11 Uhr findet das Frühschoppenkonzert satt.</p>

        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SommernachtsFest'
}
</script>
