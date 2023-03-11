<template>
    <h1>Vorstand</h1>
    <ul>
        <li v-for="person in persons" :key="person.name">
            <BoardPerson :_function="person.function" :name="person.name" :image="person.image" :tel="person.tel"
                :email="person.email"></BoardPerson>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import persons from '../json/board.json'
import BoardPerson from '../components/BoardPerson.vue'

export default defineComponent({
    name: "AboutUsView",
    data() {
        return {
            persons: persons
        }
    },
    components: {
        BoardPerson
    }
})
</script>
<style scoped></style>