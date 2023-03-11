<template>
    <div class="board-person">
        <img :src="image" alt="Bild von {{ name }}" />
        <div>
            <p class="function">{{ _function }}</p>
            <p class="name">{{ name }}</p>
            <a class="tel" v-if="tel" href="tel:{{ tel }}">{{ tel }}</a>
            <a class="email" v-if="email" href="mailto:{{ email}}">Email</a>
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

.board-person div {
    display: flex;
    flex-direction: column;
}
.function {
    margin: 10px 0 2px 0;
}
.name {
    font-weight: bold;
    margin: 0;}


.tel{
    margin: 12px 0;
}
.email{
    margin: 12px 0;
}

img {
    width: 140px;
    height: 187px;
    object-fit: cover;
    margin-right: 20px;
    margin-right: 10px;
}</style>