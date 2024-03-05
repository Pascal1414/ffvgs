<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col" :class="{ 'lg:flex-row-reverse': reversed, 'lg:flex-row': !reversed }">
            <img :src="props.images?.[0]" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    'images': {
        type: Array<string>,
        required: true
    },
    'reversed': {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped></style>
