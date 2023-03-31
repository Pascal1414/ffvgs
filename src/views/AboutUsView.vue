<template>
    <h1>Vorstand</h1>
    <ul class="board">
        <li v-for="person in persons" :key="person.name">
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img :src="person.image" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ person.name }}</h2>
                    <h3>{{ person.function }}</h3>
                    <div class="card-actions justify-end">
                        <a class="tel link link-info" v-if="person.tel" :href="person.tel">Anrufen </a>
                        <a class="email link link-info" v-if="person.email" :href="person.email">Email</a>
                    </div>
                </div>
            </div>
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
import BoardPerson from '../components/aboutUs/BoardPerson.vue'
import Vip from '../components/aboutUs/Vip.vue'

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
    justify-content: space-between;
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