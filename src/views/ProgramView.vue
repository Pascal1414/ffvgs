<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-4">Program</h1>
    <div class="form-control">
      <label for="role" class="label">
        <span class="label-text">Program nach Mitgliedschaft anzeigen:</span>
      </label>
      <select class="select select-bordered max-w-xs mb-4" name="mitgliedschaft" id="role"
        @change="selectionChanged($event)">
        <option value="none" selected>Alles anzeigen</option>
        <option value="alle">Alle Mitglieder</option>
        <option value="junioren">Junioren</option>
        <option value="jugendgruppe">Jugendgruppe</option>
      </select>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Done</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="programItem in currentList">
          <th>
            <svg width="27px" height="27px" viewBox="0 0 32 32" class="" xmlns="http://www.w3.org/2000/svg">
              <path v-if="alreadyHappened(programItem)" class="fill-base-content"
                d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
            </svg>
          </th>
          <td>{{ programItem.name }}</td>
          <td>
            <div class="dates">
              <div v-for="(date, index) in programItem.dates" :key="index">{{ formatDate(date) }}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="alert alert-info shadow-lg mt-4" v-if="!formVisible">
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
  <form class=" card-body" v-if="formVisible" @submit.prevent="formSubmit">
    <div class=" form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input v-model="name" type="text" placeholder="Name" class="input input-bordered" required />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Beschreibung</span>
      </label>
      <textarea v-model="description" class="textarea textarea-bordered" placeholder="Beschreibung" required></textarea>
    </div>

    <div class="form-control">
      <div class="flex flex-row gap-2 flex-wrap mb-3">
        <div v-for="(date, index) in dates" class="flex gap-3">
          <div class="card bg-base-200 shadow-xl h-min">
            <div class="flex p-3 flex-row gap-5">
              <p>{{ date }}</p>
              <button class="btn btn-error btn-xs" @click="onRemoveDate(index)">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="onAddDate" class="flex  flex-row gap-2">
        <input type="date" class="input input-bordered" />
        <button class="btn btn-primary">Add</button>
      </form>
    </div>

    <div class="form-control flex-row justify-evenly ">
      <label class="label cursor-pointer flex-col gap-2">
        <span class="label-text">Für Alle</span>
        <input v-model="forAll" type="checkbox" checked="checked" class="checkbox" />
      </label>
      <label class="label cursor-pointer flex-col gap-2">
        <span class="label-text">Für Junioren</span>
        <input v-model="forJunior" type="checkbox" checked="checked" class="checkbox" />
      </label>
      <label class="label cursor-pointer flex-col gap-2">
        <span class="label-text">Für Jugendgruppe</span>
        <input v-model="forJugendGroup" type="checkbox" checked="checked" class="checkbox" />
      </label>
    </div>



    <div class="form-control mt-6">
      <button class="btn btn-primary">{{ confirmButtonText }}</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import type { Tables } from '../database/supabase';
import { supabase } from '../supabase';

let programs: Ref<Array<Tables<'Program'>>> = ref([])
let currentList: Ref<Array<Tables<'Program'>>> = ref([])

/* Add and Edit */
let formVisible = ref(true)
let confirmButtonText = ref('Hinzufügen')
let isEditing = ref(false)
let error = ref('')

/* Values */
let dates: Ref<Array<string>> = ref([])
let name: Ref<string> = ref('')
let description: Ref<string> = ref('')
let forAll: Ref<boolean> = ref(false)
let forJunior: Ref<boolean> = ref(false)
let forJugendGroup: Ref<boolean> = ref(false)

function onAddDate() {
  const dateElement = (document.querySelector('input[type="date"]') as HTMLInputElement)
  const date = dateElement?.value
  if (date === '') return
  dates.value.push(date)
  dateElement.value = ''
}
function onRemoveDate(index: number) {
  dates.value.splice(index, 1)
}
async function formSubmit() {
  if (isEditing.value) {

  } else {
    const { data, error } = await supabase
      .from('Program')
      .insert([
        {
          name: name.value,
          description: description.value,
          dates: dates.value,
          forAll: forAll.value,
          forJunior: forJunior.value,
          forJugendGroup: forJugendGroup.value
        },
      ])
      .select()
    if (error) {
      error.value = error.message
      return
    }
  }

  resetForm()
}
function resetForm() {
  name.value = ''
  description.value = ''
  dates.value = []
  forAll.value = false
  forJunior.value = false
  forJugendGroup.value = false
}


onMounted(() => {
  supabase
    .from('Program')
    .select('*').order(
      'dates',
      { ascending: true, nullsFirst: true }
    ).then(({ data, error }) => {
      programs.value = data || [];
      currentList.value = programs.value
    })
})

function alreadyHappened(programItem: any): boolean {
  if (programItem.dates === null || programItem.dates.length === 0) return false
  for (let date of programItem.dates) if (new Date(date) > new Date()) return false
  return true
}
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('ch-DE')
}
function selectionChanged(event: Event) {
  switch ((event.target as HTMLInputElement).value) {
    case 'junioren':
      currentList.value = programs.value.filter((i) => i.forJunior)
      break
    case 'alle':
      currentList.value = programs.value.filter((i) => i.forAll)
      break
    case 'jugendgruppe':
      currentList.value = programs.value.filter((i) => i.forJugendGroup)
      break

    default:
      currentList.value = programs.value;
      break
  }
}

</script>

<style scoped>
#program-table {
  padding: 0;
  list-style: none;
}
</style>
