<template>
    <div class="slideshow">
        <img :src="currentImage.src" :alt="currentImage.alt">
        <button class="btn left" @click="prev">❮</button>
        <button class="btn right" @click="next">❯</button>
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
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slideshow img {
    width: 100%;
    height: 100%;
}

.btn {
    width: 50px;
    border: none;
    outline: none;
    background: none;
    color: white;
}

.btn:hover {
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
}

.left {
    position: absolute;
    left: 0;
    top: 50%;
    height: 60px;

}

.right {
    position: absolute;
    right: 0;
    top: 50%;
    height: 60px;

}
</style>