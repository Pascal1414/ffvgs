<template>
    <!-- The button to open modal -->
    <label for="my-modal-5" class="btn">open modal</label>

    <!-- grid for images -->



    <div v-for="event in events">
        <div class="card card-compact w-[100%] bg-base-200 shadow-xl">
            <div class="card-body">

                <h1 class="text-2xl font-bold mb-2">{{ event.name }}</h1>
                <div v-for="images in event.images">
                    <div v-if="images.length === 2" class="flex flex-row justify-between mb-[1%] gap-3">
                        <img class="w-[50%] rounded-box" :src="images[0].url" :alt="images[0].caption" />
                        <img class="w-[50%] rounded-box" :src="images[1].url" :alt="images[1].caption" />
                    </div>
                    <div v-else class="flex flex-row justify-between mb-[1%] gap-3">
                        <img class="w-[50%] rounded-box" :src="images[0].url" :alt="images[0].caption" />
                        <img class="w-[50%] rounded-box" :src="images[1].url" :alt="images[1].caption" />
                        <img class="w-[50%] rounded-box" :src="images[2].url" :alt="images[2].caption" />
                    </div>
                </div>
            </div>
        </div>

    </div>



















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
import ImagePreview from '../components/ImagePreview.vue';

export default {
    name: 'GalleryView',
    components: {
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
                                "url": "/images/galery/Silchsammelaktion22/20221022_142359small.jpg",
                                "caption": "Image 1"
                            },
                            {
                                "url": "/images/galery/Silchsammelaktion22/20221022_142359small.jpg",
                                "caption": "Image 2"
                            }
                        ],
                        [
                            {
                                "url": "/images/galery/Helferausflug22/IMG_0868small.jpg",
                                "caption": "Image 3"
                            },
                            {
                                "url": "/images/galery/Helferausflug22/IMG_0868small.jpg",
                                "caption": "Image 4"
                            },
                            {
                                "url": "/images/galery/Helferausflug22/IMG_0868small.jpg",
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