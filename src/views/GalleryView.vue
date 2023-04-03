<template>
    <!-- The button to open modal -->
    <label for="my-modal-5" class="btn">open modal</label>

    <!-- grid for images -->























    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
                <label for="my-modal-5" class="btn">Yay!</label>
            </div>
        </div>
    </div>
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
            "events": [
                {
                    "name": "Event 1",
                    "images": [
                        [
                            {
                                "url": "http://www.example.com/image1.jpg",
                                "caption": "Image 1"
                            },
                            {
                                "url": "http://www.example.com/image2.jpg",
                                "caption": "Image 2"
                            }
                        ],
                        [
                            {
                                "url": "http://www.example.com/image3.jpg",
                                "caption": "Image 3"
                            },
                            {
                                "url": "http://www.example.com/image4.jpg",
                                "caption": "Image 4"
                            },
                            {
                                "url": "http://www.example.com/image5.jpg",
                                "caption": "Image 5"
                            }
                        ]
                    ]
                }
            ]
        };
    }
}
</script>
<style scoped></style>