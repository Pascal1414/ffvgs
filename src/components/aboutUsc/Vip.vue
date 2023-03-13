<template>
    <li>
        <img :src="image" alt="Bild von {{name}}" />
        <div class="container">
            <p class="role"><b>{{ role }}</b></p>
            <p>{{ name }}</p>
        </div>
    </li>
</template>
<script lang="ts">
export default {
    name: "Vip",
    props: {
        role: {
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
        }
    }
};
</script>
<style scoped>
p {
    white-space: pre-line;
    margin: 0;
}

.role {
    margin-bottom: 0.3em;
}

img {
    width: 130px;
    object-fit: cover;
}
</style>