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
        <div class="modal-box w-11/12 max-w-5xl flex row h-[100%]">
            <button class="btn absolute top-[50%] translate-y-[-50%] left-[10px]" @click="previous()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg></button>
            <img class="object-contain ml-auto mr-auto" v-if="previewImageArray[previewImageIndex]"
                :src="previewImageArray[previewImageIndex].url" />
            <button class="btn absolute top-[50%] translate-y-[-50%] right-[10px]" @click="next()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            <label for="my-modal-5" class="btn absolute top-[10px] right-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </label>
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