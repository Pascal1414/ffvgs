<template>
    <h1 class="text-4xl font-bold mb-4">Vorstand</h1>
    <ul class="board">
        <li v-for="person in persons" :key="person.name">
            <div class="card card-side bg-base-100 shadow-xl">
                <figure>
                    <div :style="{ backgroundImage: `url(${person.image})` }" class="image">
                    </div>
                </figure>
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
    <h1 class="text-4xl font-bold mt-4 mb-3">VIPs – Funktionäre und Ehrenmitglieder</h1>
    <ul class="vip">
        <li v-for="vip in vips" :key="vip.name">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <div :style="{ backgroundImage: `url(${vip.image})` }" class="image">
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{{ vip.name }}</h2>
                    <p>{{ vip.role }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import persons from '../json/board.json'
import vips from '../json/vip.json'

export default defineComponent({
    name: "AboutUsView",
    data() {
        return {
            persons: persons,
            vips: vips
        }
    },
    components: {
    }
})
</script>
<style scoped>
.board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 25px;
}

.board li {
    width: 40%;
    height: 250px;
    min-width: 300px;
}

.card-actions {
    display: flex;
    flex-direction: column;
}

.image {
    width: 180px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 250px;
    object-fit: cover;
}

.vip {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 25px;
}

.vip>li>.card {
    width: 100%;
}
</style>