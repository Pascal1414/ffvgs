<template>
    <div class="slideshow">
        <img :src="currentImage.src" :alt="currentImage.alt">
        <div class="controls">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Slideshow',
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    computed: {
        currentImage(): any {
            return this.images[this.currentIndex];
        },
    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
    },
};
</script>

<style>
.slideshow {
    width: 100%;
}

.slideshow img {
    width: 100%;
    height: 100%;
}

.controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>