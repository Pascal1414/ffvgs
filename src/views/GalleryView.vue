<template>
    <GalleryItem title="Absenden 2021">

        <DoubleImage image1="/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg"
            image2="/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg" />

        <TripleImage image1="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image2="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image3="/images/galery/Helferausflug22/IMG_0868small.jpg" />

    </GalleryItem>

    <GalleryItem title="Absenden 2021">

        <TripleImage image1="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image2="/images/galery/Helferausflug22/IMG_0868small.jpg"
            image3="/images/galery/Helferausflug22/IMG_0868small.jpg" />


    </GalleryItem>


    <ImagePreview  :close-preview="() => displayPreview = false"
        :open-preview="() => displayPreview = true" :style="{display: getDisplay(displayPreview) }"/>
</template>
<script lang="ts">
import DoubleImage from '../components/gallery/DoubleImage.vue';
import TripleImage from '../components/gallery/TripleImage.vue';
import GalleryItem from '../components/gallery/GalleryItem.vue';
import ImagePreview from '../components/ImagePreview.vue';

export default {
    name: 'GalleryView',
    components: {
        GalleryItem,
        DoubleImage,
        TripleImage,
        ImagePreview
    },
    data() {
        return {
            displayPreview: false,
            // images: [
            //     {
            //         src: '/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg',
            //         alt: 'Trüschenfischen'
            //     },
            //     {
            //         src: '/images/galery/Helferausflug22/IMG_0868small.jpg',
            //         alt: 'Helferausflug 2022'
            //     }
            // ]
        };
    },
    methods: {
        openPreview() {
            this.displayPreview = true;
        },
        getDisplay(display: boolean) {
            if (display) {
                return "block";
            } else {
                return "none";
            }
        }
    }

}
</script>
<style scoped></style>