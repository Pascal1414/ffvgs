<template>
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="font-semibold text-primary">404</p>
            <h1 class="text-4xl font-bold">Seite nicht gefunden</h1>
            <p class="mt-6">Die Seite nach der du suchst wurde nicht gefunden.</p>
        </div>
    </main>
</template>
<script lang="ts">
export default {
    name: 'NotFoundView'
};
</script>
<style lang="css">
.center {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 1% 0 10% 0;
}
</style>