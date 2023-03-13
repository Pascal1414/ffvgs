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
    background-color: black;
    opacity: 0.5;
    color: white;
    height: 60px;
    transform: translateY(-50%);
}

.btn:hover {
    border: none;
    color: white;
    cursor: pointer;
    opacity: 1;
    background-color: black;

}

.left {
    position: absolute;
    left: 0;
    top: 50%;
    border-radius: 0 10px 10px 0;
}

.right {
    position: absolute;
    right: 0;
    top: 50%;
    border-radius: 10px 0 0 10px;
}
</style>