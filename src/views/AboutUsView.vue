<template>
    <h1 class="text-4xl font-bold mb-4">Vorstand</h1>
    <div class="board flex flex-wrap justify-between gap-[25px]">
        <div v-for="person in persons" class="card card-side bg-base-200 shadow-xl ">
            <figure><img class="h-[300px] w-[230px]" :src="person.image" alt="Movie" /></figure>
            <div class="card-body w-[240px]">
                <h2 class="card-title">{{ person.name }}</h2>
                <p class="grow-0">{{ person.function }}</p>
                <div class="flex flex-row gap-[20px] mt-[24px]">
                    <a :href="'tel:' + person.tel">
                        <svg class="fill-current" width="24" height="24" viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
                        </svg>
                    </a>
                    <a :href="'mailto:' + person.email">
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960"
                            width="24">
                            <path
                                d="M142.152 901.978q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865V318.152q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152ZM480 601.652l-337.848-223v455.196h675.696V378.652L480 601.652Zm0-65.5 333.848-218H147.152l332.848 218Zm-337.848-157.5v-60.5 515.696-455.196Z" />
                        </svg>
                    </a>
                </div>


            </div>
        </div>
    </div>
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
@media (max-width: 500px) {
    .card {
        width: 100%;
        height: 250px;
    }

}
</style>