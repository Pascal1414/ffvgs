<template>
    <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold mb-4">Program</h1>
        <div class="form-control">
            <label for="role" class="label">
                <span class="label-text">Program nach Mitgliedschaft anzeigen:</span>
            </label>
            <select v-model="selectionSelect" class="select select-bordered max-w-xs mb-4" name="mitgliedschaft"
                id="role" @change="updateVisibleProgramsToInputField()">
                <option value="none" selected>Alles anzeigen</option>
                <option value="alle">Alle Mitglieder</option>
                <option value="junioren">Junioren</option>
                <option value="jugendgruppe">Jugendgruppe</option>
            </select>
        </div>
        <span v-if="!isFetched" class="loading loading-spinner loading-lg mt-[50px] mb-[50px]"></span>
    </div>

    <div class="overflow-x-auto">
        <table v-if="isFetched" class="table table-zebra w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>Done</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="programItem in currentList" :key="programItem.id" class="hover"
                    @click="onItemClick(programItem)">
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
</template>

<script lang="ts" setup>
import type { Program } from '~/types/program';

const config = useRuntimeConfig()
const router = useRouter()

const programs: Ref<Program[]> = ref([])
const currentList: Ref<Program[]> = ref([])
const selectionSelect: Ref<string> = ref('');

const isFetched = ref(false)

useLazyFetch(config.public.apiUrl + '/programs', {
    onResponse({ request, response, options }) {
        isFetched.value = true
        const sanitizedResponse = sanitizeApiResponse(response._data) as Program[];

        programs.value = sanitizedResponse;
        updateVisibleProgramsToInputField()
    }
})

function onItemClick(item: Program) {
    router.push(`/program/${item.id}`)
}

function alreadyHappened(programItem: Program): boolean {
    if (programItem.dates === null || programItem.dates.length === 0) return false
    for (let date of programItem.dates) if (new Date(date) > new Date()) return false
    return true
}
function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('ch-DE')
}
function updateVisibleProgramsToInputField() {
    switch (selectionSelect.value) {
        case 'junioren':
            currentList.value = programs.value.filter((i) => i.forJunior)
            break
        case 'alle':
            currentList.value = programs.value.filter((i) => i.forAll)
            break
        case 'jugendgruppe':
            currentList.value = programs.value.filter((i) => i.forJugend)
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

.hover {
    cursor: pointer;
}
</style>
