<template>
    <div>
        <img :src="image1" alt="Image 1" />
        <img :src="image2" alt="Image 2"/>

    </div>
</template>
<script lang="ts">

export default {
    name: 'DoubleImage',
    props: {
        image1: {
            type: String,
            required: true
        }, 
        image2: {
            type: String,
            required: true
        }

    }
}


</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1%;
}

div img {
    width: 49.5%;
    height: 49.5%;
}
</style>