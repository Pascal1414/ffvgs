<template>
    <p>{{ route.params.id }}</p>
</template>
<script lang="ts" setup>
const route = useRoute()
</script>