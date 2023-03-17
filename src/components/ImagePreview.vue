<template>
    <div ref="imagePreview" class="background">
        <div class="image-preview">
            <button class="image-preview__close" @click="closeClick($event)">X</button>
            <button class="image-preview__prev" @click="prev">❮</button>
            <button class="image-preview__next" @click="next">❯</button>
            <div class="image-preview__image" :style="{ backgroundImage: 'url(' + currentImage.src + ')' }">
                <!-- <div :style="{ backgroundImage: currentImage.src }"></div>
                <img :src="currentImage.src" :alt="currentImage.alt"> -->
            </div>
        </div>
    </div>
</template>
<script lang="ts">

type MyFunctionType = (param: Event) => void;


export default {
    name: 'ImagePreview',
    props: {
        closePreview: {

            type: Function,
            required: true
        },
        openPreview: {
            type: Function,
            required: true
        }


    },
    data() {
        return {
            images: [] as Array<{ src: string, alt: string }>,
            currentIndex: 0,
            tempHeight: "10px"
        };
    },
    computed: {
        currentImage(): any {
            return this.images[this.currentIndex];
        },
    },
    created() {
        //Get all images from the gallery
        const images = document.querySelectorAll('img');

        images.forEach((image) => {
            this.images.push({
                src: image.getAttribute('src') ?? '',
                alt: image.getAttribute('alt') ?? ''
            });


            const handleclick = () => {
                this.openPreview(image.src);
                console.log(image.src);
            }
            //Check if image has clickevent
            image.removeEventListener('click', handleclick);

            image.addEventListener('click', handleclick);
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                this.closePreview();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.prev();
            } else if (event.key === 'ArrowRight') {
                this.next();
            }
        });

        document.addEventListener('click', (event) => {
            if (event.target === this.$refs.imagePreview) {
                this.closePreview();
            }
        });

    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        closeClick(event: Event) {
            this.closePreview();
        }
    }
}
</script>
<style lang="css" scoped>
.closed {
    display: none;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.image-preview {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    overflow: hidden;
    z-index: 200;
    background-color: black;
    padding: 55px;
    border-radius: 11px;
}

.image-preview__image {
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.image-preview__close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
}

.image-preview__prev {
    position: absolute;
    top: 50%;
    left: 5px;
    width: 50px;
    height: 50px;
}

.image-preview__next {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 50px;
    height: 50px;

}
</style>