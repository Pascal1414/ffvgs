<template>
    <Jungfischerkurs />
    <Sommernachtsfest />
</template>
<script lang="ts">
import Sommernachtsfest from '@/components/event/Sommernachtsfest.vue';
import Jungfischerkurs from '@/components/event/Jungfischerkurs.vue';

export default {
    name: 'EventView',
    components: {
        Sommernachtsfest,
        Jungfischerkurs
    }
};
</script >
<style lang="css"></style>