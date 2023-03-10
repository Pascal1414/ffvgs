<template>
    <GalleryItem title="Absenden 2021">
        
        <DoubleImage image1="/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg"
            image2="/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg" />

        <TripleImage image1="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image2="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image3="/images/galery/Helferausflug22/IMG_0868small.jpg" />
            
    </GalleryItem>


</template>
<script lang="ts">
import DoubleImage from '@/components/gallery/DoubleImage.vue';
import TripleImage from '@/components/gallery/TripleImage.vue';
import GalleryItem from '@/components/gallery/GalleryItem.vue';

export default {
    name: 'GalleryView',
    components: {
        GalleryItem,
        DoubleImage,
        TripleImage
    }
}
</script>
<style scoped></style>