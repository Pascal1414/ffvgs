<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-4">Programm</h1>
    <div class="form-control">
      <label class="floating-label w-[250px]">
        <span>Nach Mitgliedschaft filtern:</span>
        <select
          v-model="selectionSelect"
          class="select max-w-xs mb-4"
          name="mitgliedschaft"
          id="role"
        >
          <option
            v-for="option in selectionOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </label>
    </div>
  </div>

  <div
    v-for="programItem in programs"
    :key="programItem.id"
    class="card bg-base-200 shadow-sm mb-4"
  >
    <div class="card-body">
      <div class="flex gap-2">
        <div v-if="programItem.forAll" class="badge badge-soft badge-primary">
          Für alle
        </div>

        <div
          v-if="programItem.forJunior"
          class="badge badge-soft badge-success"
        >
          Für Junioren
        </div>
      </div>

      <h2 class="text-2xl font-bold">{{ programItem.name }}</h2>
      <ul class="flex flex-col gap-1 text-xs">
        <li v-for="date in programItem.dates" :key="date">
          <span>{{ toFormattedString(new Date(date)) }}</span>
        </li>
      </ul>
      <div class="w-full flex justify-end mt-6" v-if="programItem.description">
        <button @click="onItemClick(programItem)" class="btn btn-primary">
          Details
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Program } from '~/types/program';
import type { AsyncData } from '#app';

const config = useRuntimeConfig();
const router = useRouter();

const selectionOptions = ref([
  { value: 'none', text: 'Alles anzeigen' },
  { value: 'alle', text: 'Alle Mitglieder' },
  { value: 'junioren', text: 'Junioren' },
]);

const selectionSelect: Ref<string> = ref(selectionOptions.value[0].value);

const { data: programs, status } = await useLazyFetch(
  config.public.apiUrl + '/programs',
  {
    query: { populate: '*', 'pagination[limit]': -1 },
    transform: (_programs: AsyncData<any, any>) => {
      const sanitizedResponse = sanitizeApiResponse(_programs) as Program[];
      return oderByDate(sanitizedResponse);
    },
  },
);

function removePastEvents(programms: Program[]): Program[] {
  return programms.filter((program) => {
    if (program.dates === null || program.dates.length === 0) return true;
    if (program.dates.every((date) => new Date(date) < new Date()))
      return false;
    return true;
  });
}

function oderByDate(programms: Program[]): Program[] {
  return programms.sort((a, b) => {
    if (a.dates === null || a.dates.length === 0) return 1;
    if (b.dates === null || b.dates.length === 0) return -1;
    const dateA = new Date(a.dates[0]);
    const dateB = new Date(b.dates[0]);
    if (dateA === dateB) return 0;
    return dateA > dateB ? 1 : -1;
  });
}

function shouldShowProgram(program: Program): boolean {
  switch (selectionSelect.value) {
    case 'junioren':
      return program.forJunior;
    case 'alle':
      return program.forAll;
    default:
      return true;
  }
}

function onItemClick(item: Program) {
  router.push(`/program/${item.id}`);
}

function alreadyHappened(programItem: Program): boolean {
  if (programItem.dates === null || programItem.dates.length === 0)
    return false;
  for (let date of programItem.dates)
    if (new Date(date) > new Date()) return false;
  return true;
}
</script>

<style scoped>
#program-table {
  padding: 0;
  list-style: none;
}

.hover {
  cursor: pointer;
}
</style>
