<template>
    <div class="board-person">
        <img :src="image" :alt="alt" />
        <div>
            <p class="function">{{ _function }}</p>
            <p class="name">{{ name }}</p>
            <a class="tel" v-if="tel" :href="tellink">{{ tel }}</a>
            <a class="email" v-if="email" :href="mailto">Email</a>
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
    data() {
        return {
            alt: "Bild von " + this.name,
            tellink: "tel:" + this.tel,
            mailto: "mailto:" + this.email,
        };
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
    margin: 0;
    margin-bottom: 6px;
    white-space: pre-line;
}

.name {
    margin: 0;
    font-weight: bold;
    margin-bottom: 12px;
}

.tel {
    margin: 0;
    margin-bottom: 12px;
}

.email {
    margin: 0;
    margin-bottom: 12px;
}

img {
    width: 140px;
    height: 187px;
    object-fit: cover;
    margin-right: 20px;
    margin-right: 10px;
}
</style>