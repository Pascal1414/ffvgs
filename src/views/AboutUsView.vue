<template>
    <h1>Vorstand</h1>
    <ul class="board">
        <li v-for="person in persons" :key="person.name">
            <BoardPerson :_function="person.function" :name="person.name" :image="person.image" :tel="person.tel"
                :email="person.email" />
        </li>
    </ul>
    <h1>VIPs – Funktionäre und Ehrenmitglieder</h1>
    <ul class="vip">
        <li v-for="vip in vips" :key="vip.name">
            <Vip :role="vip.role" :name="vip.name" :image="vip.image" />
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import persons from '../json/board.json'
import vips from '../json/vip.json'
import BoardPerson from '../components/AboutUs/BoardPerson.vue'
import Vip from '../components/AboutUs/Vip.vue'

export default defineComponent({
    name: "AboutUsView",
    data() {
        return {
            persons: persons,
            vips: vips
        }
    },
    components: {
        BoardPerson,
        Vip
    }
})
</script>
<style scoped>
.board {
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 25px;
}

.board li {
    list-style: none;
    width: 40%;
    min-width: 300px;
}

.vip {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    gap: 7%;
    row-gap: 40px;
}

.vip li {
    list-style: none;
}
</style>