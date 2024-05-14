<template>
    <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold mb-4">Program</h1>
        <div class="form-control">
            <label for="role" class="label">
                <span class="label-text">Program nach Mitgliedschaft anzeigen:</span>
            </label>
            <select v-model="selectionSelect" class="select select-bordered max-w-xs mb-4" name="mitgliedschaft"
                id="role">
                <option v-for="option in selectionOptions" :key="option.value" :value="option.value">
                    {{ option.text }}</option>
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
                <tr v-for="programItem in programs" :key="programItem.id" class="hover"
                    @click="onItemClick(programItem)">
                    <th v-if="shouldShowProgram(programItem)">
                        <svg width="27px" height="27px" viewBox="0 0 32 32" class="" xmlns="http://www.w3.org/2000/svg">
                            <path v-if="alreadyHappened(programItem)" class="fill-base-content"
                                d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
                        </svg>
                    </th>
                    <td v-if="shouldShowProgram(programItem)">{{ programItem.name }}</td>
                    <td v-if="shouldShowProgram(programItem)">
                        <div class="dates">
                            <div v-for="(date, index) in programItem.dates" :key="index">{{ toFormattedString(new
                                Date(date)) }}
                            </div>
                        </div>
                    </td>
                </tr>

                <tr v-if="pending && programs === null" v-for="n in 5" :key="n">
                    <th>
                        <div class="skeleton w-[27px] h-[27px] rounded-full shrink-0"></div>
                    </th>
                    <td>
                        <div class="skeleton h-4 w-60"></div>
                    </td>
                    <td>
                        <div class="flex flex-col gap-4 w-52">
                            <div class="skeleton h-4 w-28"></div>
                            <div v-if="n % 3 === 0" class="skeleton h-4 w-28"></div>
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
import type { AsyncData } from '#app';

const config = useRuntimeConfig()
const router = useRouter()

const selectionOptions = ref([
    { value: 'none', text: 'Alles anzeigen' },
    { value: 'alle', text: 'Alle Mitglieder' },
    { value: 'junioren', text: 'Junioren' },
    { value: 'jugendgruppe', text: 'Jugendgruppe' }
])

const selectionSelect: Ref<string> = ref(selectionOptions.value[0].value);

const { data: programs, pending } = await useLazyFetch(config.public.apiUrl + '/programs', {
    query: { "populate": '*' },
    transform: (_programs: AsyncData<any, any>) => {
        const sanitizedResponse = sanitizeApiResponse(_programs) as Program[];
        return oderByDate(sanitizedResponse)
    }
})

function oderByDate(programms: Program[]): Program[] {
    return programms.sort((a, b) => {
        if (a.dates === null || a.dates.length === 0) return 1
        if (b.dates === null || b.dates.length === 0) return -1
        const dateA = new Date(a.dates[0]);
        const dateB = new Date(b.dates[0]);
        if (dateA === dateB) return 0;
        return dateA > dateB ? 1 : -1;
    })
}


function shouldShowProgram(program: Program): boolean {
    switch (selectionSelect.value) {
        case 'junioren':
            return program.forJunior
        case 'alle':
            return program.forAll
        case 'jugendgruppe':
            return program.forJugend
        default:
            return true
    }
}

function onItemClick(item: Program) {
    router.push(`/program/${item.id}`)
}

function alreadyHappened(programItem: Program): boolean {
    if (programItem.dates === null || programItem.dates.length === 0) return false
    for (let date of programItem.dates) if (new Date(date) > new Date()) return false
    return true
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
