<template>
    <h1>{{ title }}</h1>
    <slot></slot>
</template>
<script lang="ts">

export default {
    name: 'Report',
    props: {
        title: {
            type: String,
            required: true
        }
    },
}
</script>
<style scoped></style>