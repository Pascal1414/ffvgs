<template>
  <h1 class="text-4xl font-bold mb-4">Jungfischerkurs</h1>

  <div class="flex flex-col mb-4 w-full lg:flex-row">
    <div class="lg:w-[50%] p-4 card bg-base-200 rounded-box">
      <!-- <p>
                Jedes Jahr bietet die FFVGS 50 Jugendlichen ab Jahrgang 2011 bis 2015 die Möglichkeit, unter
                professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>

            <p class="mb-2"> Zuerst wird in der Theorie der Umgang mit dem Lebewesen «Fisch», der Natur und diverses
                Angeltechniken erlernt, danach wird das theoretisch Erlernte mit erfahrenen Fischern am Wasser getestet. Die
                anschliessende
                Rangverkündigung und Verabschiedung mit den Eltern runden den spannende Angelmorgen gebührend
                ab. </p> -->

      <p class="mb-2">
        Jährlich findet nach Möglichkeit unser beliebtes Jugendfischen am
        Greifensee statt. Wir zeigen den Kindern in der Theorie den Umgang mit
        dem Lebewesen «Fisch», der Natur und diverses Angeltechniken. Das
        theoretisch Erlernte wird am Sonntag mit erfahrenen Fischern am Wasser
        getestet, mit anschliessender Rangverkündigung. Teilnehmen können Kinder
        ab 7 Jahren.
      </p>

      <div class="card card-sm bg-base-100 shadow-xl mt-6 mb-4">
        <div class="card-body">
          <h2 class="card-title">Ablauf (27. & 28.09.2025)</h2>
          <ul>
            <li>
              <p>
                <span class="font-bold">Samstag: </span> Theorie und Umgang mit
                dem Lebewesen «Fisch».
              </p>
            </li>
            <li>
              <span class="font-bold">Sonntag: </span> Verteilt um den
              Greifensee werden wir angeln gehen.
            </li>
          </ul>
        </div>
      </div>

      <div role="alert" class="alert alert-info mb-4">
        <client-only>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </client-only>
        <span>
          Wichtig: es findet an diesen zwei Tagen kein Fischbacken statt und
          keine Gastwirtschaft, da es sich nicht um einen öffentlichen Anlass
          handelt.
        </span>
      </div>
      <p class="mb-2">Petri Heil, Eure FFVGS</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div
      class="grid grow lg:w-[50%] p-4 card bg-base-200 rounded-box place-items-center"
    >
      <slideshow class="double-item" :images="images" />
    </div>
  </div>

  <div class="card w-full bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Anmeldung Jungfischerkurs</h2>

      <div role="alert" class="alert alert-info mb-4">
        <client-only>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </client-only>
        <span>
          Der Jungfischerkurs ist ausgebucht! Vielen Dank für die ganzen
          Anmeldungen.
        </span>
      </div>

      <!-- <form action="https://formspree.io/f/mzzrbplj" method="POST">
        <div class="flex flex-col w-full lg:flex-row">
          <div class="card lg:w-[50%] flex flex-col gap-3">
            <h2 class="card-title">Jugendliche oder Jugendlicher</h2>

            <label class="floating-label">
              <span>Vorname</span>
              <input
                id="course-registration-firstname"
                name="participant-firstname"
                type="text"
                placeholder="Vorname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Nachname</span>
              <input
                id="course-registration-lastname"
                name="participant-lastname"
                type="text"
                placeholder="Nachname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Adresse</span>
              <input
                id="course-registration-address"
                name="participant-address"
                type="text"
                placeholder="Adresse"
                class="input w-full"
                required
              />
            </label>

            <div class="join w-full">
              <label class="floating-label w-[70%] join-item">
                <span>Ort</span>
                <input
                  type="text"
                  id="course-registration-city"
                  name="participant-city"
                  placeholder="Ort"
                  class="input join-item w-full"
                  required
                />
              </label>

              <label class="floating-label w-[30%] join-item">
                <span>PLZ</span>
                <input
                  id="course-registration-zip"
                  name="participant-zip"
                  type="text"
                  placeholder="PLZ"
                  class="input join-item w-full"
                  required
                />
              </label>
            </div>

            <label class="input w-full">
              <span class="label">Geburtsdatum</span>
              <input
                id="course-registration-birthdate"
                name="participant-birthdate"
                type="date"
                placeholder="Geburtsdatum"
                class="w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Schon einmal gefischt?</span>
              <select
                id="course-registration-already-fished"
                name="participant-already-fished"
                class="select w-full"
                required
              >
                <option disabled selected hidden value="">
                  Bitte auswählen
                </option>
                <option>ja</option>
                <option>nein</option>
              </select>
            </label>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="card lg:w-[50%] flex flex-col gap-3">
            <h2 class="card-title">Erziehungsberechtigte Person</h2>

            <label class="floating-label">
              <span>Vorname</span>
              <input
                id="course-registration-parent-firstname"
                name="parent-firstname"
                type="text"
                placeholder="Vorname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Nachname</span>
              <input
                id="course-registration-parent-lastname"
                name="parent-lastname"
                type="text"
                placeholder="Nachname"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>Telefonnummer</span>
              <input
                id="course-registration-parent-tel"
                name="parent-tel"
                type="tel"
                placeholder="Telefonnummer"
                class="input w-full"
                required
              />
            </label>

            <label class="floating-label">
              <span>E-Mail</span>
              <input
                id="course-registration-parent-email"
                name="parent-email"
                type="email"
                placeholder="E-Mail"
                class="input w-full"
                required
              />
            </label>
            <button class="btn btn-primary mt-2">Anmelden</button>
          </div>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Slideshow from "@/components/Slideshow.vue";
import { ref } from "vue";

const images = ref([
  { src: "/images/event/jungfischerkurs/festzelt.jpg", alt: "Festzelt" },
  { src: "/images/event/jungfischerkurs/fischen.jpg", alt: "Fischen" },
  { src: "/images/event/jungfischerkurs/fischen2.jpg", alt: "Fischen" },
  { src: "/images/event/jungfischerkurs/fischen3.jpg", alt: "Fischen" },
  { src: "/images/event/jungfischerkurs/schiff.jpg", alt: "Schiff" },
  { src: "/images/event/jungfischerkurs/schiff-close.jpg", alt: "Schiff" },
  {
    src: "/images/event/jungfischerkurs/zielschiessen.jpg",
    alt: "Zielschiessen",
  },
]);
</script>

<style lang="css"></style>
