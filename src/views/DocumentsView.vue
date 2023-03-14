<template>
    <h1>Downloads</h1>
    <p>Folgende Dokumente stehen zum Download zur verfügung:</p>
    <div>
        <a href="documents/BenutzungsordnungVereinsboot.pdf">Benutzungsordnung Vereinsboot</a>
        <a href="documents/FFV_Statuten_5_A5.pdf">FFV Statuten 5 A5</a>
    </div>
</template>
<script lang="ts">
export default {
    name: "DocumentsView"
}
</script>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
</style>