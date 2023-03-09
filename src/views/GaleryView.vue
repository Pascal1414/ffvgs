<template>
    <DoubleImage  />
    <TripleImage  />
    <DoubleImage  />
    <DoubleImage  />
    <TripleImage  />

</template>
<script lang="ts">
import DoubleImage from '@/components/DoubleImage.vue';
import TripleImage from '@/components/TripleImage.vue';

export default {
    name: 'GaleryView',
    components: {
        DoubleImage,
        TripleImage
    }
}
</script>
<style scoped></style>