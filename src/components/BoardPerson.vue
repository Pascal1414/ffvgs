<template>
    <div class="board-person">
        <img :src="image" alt="Bild von {{ name }}" />
        <div>
            <h2>{{ name }}</h2>
            <h3>{{ _function }}</h3>
            <p v-if="tel">Tel: {{ tel }}</p>
            <p v-if="email">Email: {{ email }}</p>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "BoardPerson",
    props: {
        _function: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        tel: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        }
    },
};
</script>
<style scoped>
.board-person {
    display: flex;
    flex-direction: row;
}
img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 20px;
}
</style>