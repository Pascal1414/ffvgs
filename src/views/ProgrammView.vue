<template>
    <h1 class="text-4xl font-bold">Programm</h1>

    <div class="form-control">
        <label for="role" class="label">
            <span class="label-text">Programm nach Mitgliedschaft anzeigen:</span>
        </label>
        <select class="select select-bordered w-full max-w-xs  mb-4" name="mitgliedschaft" id="role"
            @change="selectionChanged($event)">
            <option value="none" selected>Alles anzeigen</option>
            <option value="alle">Alle Mitglieder</option>
            <option value="junioren">Junioren</option>
            <option value="jugendgruppe">Jugendgruppe</option>
        </select>
    </div>


    <table class="table w-full">
        <tbody>
            <tr v-for="programmItem in currentList">
                <td>
                    <svg fill="#ffffff" width="27px" height="27px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path v-if="alreadyHappened(programmItem)"
                            d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
                    </svg>
                </td>
                <td>{{ programmItem.name }}</td>
                <td>
                    <div class="dates">
                        <div v-for="date in programmItem.dates">{{ formatDate(date) }} </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="mt-4">Zudem können spontane Anlässe dazukommen. Diese werden per Mail oder im Internet angekündigt.</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import json from '../json/programm.json'


export default defineComponent({
    name: 'ProgrammView',
    data() {
        return {
            json: json,
            currentList: json
        };
    },
    components: {
        
    },
    created() {
        this.currentList = this.json;
    },
    methods: {
        alreadyHappened(programmItem: any): boolean {

            if (programmItem.dates === null || programmItem.dates.length === 0)
                return false;
            for (let date of programmItem.dates)
                if (new Date(date) > new Date())
                    return false;
            return true;
        },
        formatDate(date: string): string {
            return new Date(date).toLocaleDateString('ch-DE')
        },
        selectionChanged(event: Event) {

            switch ((event.target as HTMLInputElement).value) {
                case "junioren":
                    this.currentList = this.json.filter(i => i.forJunior);
                    break;
                case "alle":
                    this.currentList = this.json.filter(i => i.forAll);
                    break;
                case "jugendgruppe":
                    this.currentList = this.json.filter(i => i.forJugendGroup);
                    break;

                default:
                    this.currentList = this.json;

                    break;
            }

            console.log(this.currentList);

        }
    }
});

</script>

<style scoped>
#programm-table {
    padding: 0;
    list-style: none;
}
</style>