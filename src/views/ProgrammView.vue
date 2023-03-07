<template>
    <h1>Programm</h1>

    <label for="role">Programm nach Mitgliedschaft anzeigen:</label>
    <select name="mitgliedschaft" id="role">
        <option value="none">Alles anzeigen</option>
        <option value="alle">Alle Mitglieder</option>
        <option value="junioren">Junioren</option>
        <option value="jugendgruppe">Jugendgruppe</option>
    </select>
    <ul id="programm-table">
        <ProgrammEvent v-for="programmItem in currentList" :name="programmItem.name" :date="programmItem.date" />
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import json from '../json/programm.json'
import ProgrammEvent from '../components/ProgrammEvent.vue'


export default defineComponent({
    name: 'ProgrammView',
    data() {
        return {
            json: json,
            currentList: json
        };
    },
    components: {
        ProgrammEvent
    },
    created() {
        this.currentList = this.json;
    },
    methods: {
    }
});

</script>

<style scoped>
#programm-table {
    padding: 0;
    list-style: none;
}
</style>