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
        getestet, mit anschliessender Rangverkündigung. Teilnehmen können Kinder ab 7 Jahren.
      </p>

      <div class="card card-compact bg-base-100 shadow-xl mt-6 mb-4">
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
      class="grid flex-grow lg:w-[50%] p-4 card bg-base-200 rounded-box place-items-center"
    >
      <slideshow class="double-item" :images="images" />
    </div>
  </div>

  <div class="card w-full bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Anmeldung Jungfischerkurs</h2>
      <form   
        action="https://formspree.io/f/mzzrbplj"
        method="POST"
      >
        <div class="flex flex-col w-full lg:flex-row">
          <div class="card lg:w-[50%]">
            <h2 class="card-title">Jugendliche oder Jugendlicher</h2>
            <label class="label" for="course-registration-firstname">
              <span class="label-text">Vorname</span>
            </label>
            <input
              id="course-registration-firstname"
              name="participant-firstname"
              type="text"
              placeholder="Vorname"
              class="input input-bordered w-full"
              required
            />

            <label class="label" for="course-registration-lastname">
              <span class="label-text">Nachname</span>
            </label>
            <input
              id="course-registration-lastname"
              name="participant-lastname"
              type="text"
              placeholder="Nachname"
              class="input input-bordered w-full"
              required
            />

            <label class="label" for="course-registration-address">
              <span class="label-text">Adresse</span>
            </label>
            <input
              id="course-registration-address"
              name="participant-address"
              type="text"
              placeholder="Adresse"
              class="input input-bordered w-full"
              required
            />

            <div class="form-control">
              <label for="course-registration-city" class="label">
                <span class="label-text">Ort</span>
              </label>
              <label class="join">
                <input
                  type="text"
                  id="course-registration-city"
                  name="participant-city"
                  placeholder="Ort"
                  class="join-item input input-bordered w-[70%]"
                  required
                />

                <input
                  id="course-registration-zip"
                  name="participant-zip"
                  type="text"
                  placeholder="PLZ"
                  class="join-item input input-bordered w-[30%]"
                  required
                />
              </label>
            </div>

            <label class="label" for="course-registration-birthdate">
              <span class="label-text">Geburtsdatum</span>
            </label>
            <input
              id="course-registration-birthdate"
              name="participant-birthdate"
              type="date"
              placeholder="Geburtsdatum"
              class="input input-bordered w-full"
              required
            />

            <label class="label" for="course-registration-already-fished">
              <span class="label-text">Schon einmal gefischt?</span>
            </label>
            <select
              id="course-registration-already-fished"
              name="participant-already-fished"
              class="select select-bordered w-full"
              required
            >
              <option disabled selected hidden value="">
                Schon einmal gefischt?
              </option>
              <option>ja</option>
              <option>nein</option>
            </select>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="card lg:w-[50%] flex column justify-between">
            <div>
              <h2 class="card-title">Erziehungsberechtigte Person</h2>
              <label class="label" for="course-registration-parent-firstname">
                <span class="label-text">Vorname</span>
              </label>
              <input
                id="course-registration-parent-firstname"
                name="parent-firstname"
                type="text"
                placeholder="Vorname"
                class="input input-bordered w-full"
                required
              />

              <label class="label" for="course-registration-parent-lastname">
                <span class="label-text">Nachname</span>
              </label>
              <input
                id="course-registration-parent-lastname"
                name="parent-lastname"
                type="text"
                placeholder="Nachname"
                class="input input-bordered w-full"
                required
              />

              <label class="label" for="course-registration-parent-tel">
                <span class="label-text">Telefonnummer</span>
              </label>
              <input
                id="course-registration-parent-tel"
                name="parent-tel"
                type="tel"
                placeholder="Telefonnummer"
                class="input input-bordered w-full"
                required
              />

              <label class="label" for="course-registration-parent-email">
                <span class="label-text">E-Mail</span>
              </label>
              <input
                id="course-registration-parent-email"
                name="parent-email"
                type="email"
                placeholder="E-Mail"
                class="input input-bordered w-full"
                required
              />
            </div>
            <button class="btn btn-primary mt-4">Anmelden</button>
          </div>
        </div>
      </form>
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
