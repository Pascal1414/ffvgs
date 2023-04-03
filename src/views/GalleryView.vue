<template>
    <div v-for="event in events">
        <div class="card card-compact w-[100%] bg-base-200 shadow-xl">
            <div class="card-body">

                <h1 class="text-2xl font-bold mb-2">{{ event.name }}</h1>
                <div v-for="images in event.images" class="flex flex-row justify-between mb-[1%] gap-3">
                    <label v-for="(image, index) in images" for="my-modal-5" class="w-[50%]" :key="index" @click="() => {
                        previewImageArray = [];
                        event.images.forEach((group) => {
                            group.forEach((image) => {
                                previewImageArray.push(image);
                            });
                        });
                        previewImageIndex = index;
                    }">
                        <img class="rounded-box" :src="image.url" :alt="image.caption" />
                    </label>
                </div>
            </div>
        </div>

    </div>


    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <button class="btn btn-primary" @click="previous()">previous</button>
            <img v-if="previewImageArray[previewImageIndex]" :src="previewImageArray[previewImageIndex].url" />
            <button class="btn btn-primary" @click="next()">next</button>

            <label for="my-modal-5" class="btn btn-ghost">close modal</label>
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
    methods: {
        previous() {
            if (this.previewImageIndex > 0) this.previewImageIndex = this.previewImageIndex - 1;
            else this.previewImageIndex = this.previewImageArray.length - 1;
        },
        next() {
            if (this.previewImageIndex < this.previewImageArray.length - 1) this.previewImageIndex = this.previewImageIndex + 1;
            else this.previewImageIndex = 0;
        }
    },
    data() {
        return {
            previewImageArray: [{
                url: '',
                caption: ''
            }],
            previewImageIndex: -1,
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