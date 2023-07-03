<template>
  <div class="card w-full bg-base-200 shadow-xl">
    <div class="card-body">
      <h1 class="text-4xl font-bold">Programm</h1>
      <div class="form-control">
        <label for="role" class="label">
          <span class="label-text">Programm nach Mitgliedschaft anzeigen:</span>
        </label>
        <select class="select select-bordered w-full max-w-xs mb-4" name="mitgliedschaft" id="role"
          @change="selectionChanged($event)">
          <option value="none" selected>Alles anzeigen</option>
          <option value="alle">Alle Mitglieder</option>
          <option value="junioren">Junioren</option>
          <option value="jugendgruppe">Jugendgruppe</option>
        </select>
      </div>
      <ul class="menu bg-base-200 w-56 p-2 rounded-box w-full gap-2">
        <li v-for="(programmItem, index) in currentList" class="flex flex-row" :id="String(index)">
          <div class="w-full flex flex-row">
            <svg width="27px" height="27px" viewBox="0 0 32 32" class="" xmlns="http://www.w3.org/2000/svg">
              <path v-if="alreadyHappened(programmItem)" class="fill-base-content"
                d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
            </svg>
            <div class="flex justify-between flex-wrap w-full">
              <div class="min-w-[260px]">{{ programmItem.name }}</div>
              <div class="dates">
                <div v-for="date in programmItem.dates">{{ formatDate(date) }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="alert alert-info shadow-lg mt-4">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="stroke-current flex-shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Zudem können spontane Anlässe dazukommen. Diese werden per Mail oder im Internet
            angekündigt.</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import json from '../json/programm.json'

export default defineComponent({
  name: 'ProgrammView',
  data() {
    return {
      json: json,
      currentList: json
    }
  },
  components: {},
  created() {
    this.currentList = this.json
  },
  mounted() {
    //this.setFocusOnNextEvent();
  },
  methods: {
    setFocusOnNextEvent() {
      for (let i = 0; i < this.currentList.length; i++) {
        if (!this.alreadyHappened(this.currentList[i])) {
          let element = document.getElementById(String(i))
          element?.scrollIntoView()
          break
        }
      }
    },
    alreadyHappened(programmItem: any): boolean {
      if (programmItem.dates === null || programmItem.dates.length === 0) return false
      for (let date of programmItem.dates) if (new Date(date) > new Date()) return false
      return true
    },
    formatDate(date: string): string {
      return new Date(date).toLocaleDateString('ch-DE')
    },
    selectionChanged(event: Event) {
      switch ((event.target as HTMLInputElement).value) {
        case 'junioren':
          this.currentList = this.json.filter((i) => i.forJunior)
          break
        case 'alle':
          this.currentList = this.json.filter((i) => i.forAll)
          break
        case 'jugendgruppe':
          this.currentList = this.json.filter((i) => i.forJugendGroup)
          break

        default:
          this.currentList = this.json

          break
      }

      console.log(this.currentList)
    }
  }
})
</script>

<style scoped>
#programm-table {
  padding: 0;
  list-style: none;
}
</style>
