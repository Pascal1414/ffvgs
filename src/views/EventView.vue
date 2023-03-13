<template>
    <Jungfischerkurs />
    <Sommernachtsfest />
</template>
<script lang="ts">
import Sommernachtsfest from '@/components/AboutUs/Event/Sommernachtsfest.vue';
import Jungfischerkurs from '@/components/AboutUs/Event/Jungfischerkurs.vue';

export default {
    name: 'EventView',
    components: {
        Sommernachtsfest,
        Jungfischerkurs
    }
};
</script >
<style lang="css"></style>