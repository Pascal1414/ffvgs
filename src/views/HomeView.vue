<template>
  <div class="hero min-h-[300px] bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">FFVGS</h1>
        <p class="py-6">
          Der Freie Fischerverein Greifensee-Schwerzenbach besteht seit 1978 und ist ein Verein mit
          rund 170 Mitgliedern aus allen Altersklassen. Wir fördern den Angelsport und geben unser
          Wissen den jüngeren Fischern weiter. So lernen Sie aus professioneller Sicht, wie die
          Fischerei Spass macht und sich trotzdem mit Flora und Fauna am Wasser vereinbaren lässt.
        </p>
      </div>
    </div>
  </div>

  <div class="divider">
  </div>

  <div class="sm:hero min-h-[400px] bg-base-100">
    <div class="hero-content w-full flex-col lg:flex-row-reverse">
      <img src="public\images\home\marmorata-forelle.png" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">Fisch des Jahres</h1>
        <p class="py-6">
          Perfekt getarnt beherrschte die Marmorata-Forelle während Jahrtausenden die Gewässer der Südschweiz. Der
          Schweizerische Fischerei-Verband SFV hat sie zum Fisch des Jahres 2024 gewählt, weil sie Botschafterin der
          einzigartigen Fischvielfalt der Alpensüdseite ist, jetzt aber um ihr Überleben kämpfen muss.
          <br>Quelle:
          <a class="link link-info" href="https://www.youtube.com/watch?v=YYlbwJKJyHg">Video</a> /
          <a class="link link-info" href="https://sfv-fsp.ch/home/aktuell/?load=1232">SFV</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<style scoped></style>
