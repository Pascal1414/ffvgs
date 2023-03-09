<template>
    <div>
        <img src="../assets/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg" alt="Image 1" />
        <img src="../assets/images/galery/Trüschenfischen/IMG_20221105_141223498small.jpg" />
        <img src="../assets/images/galery/Trüschenfischen/IMG_20221105_141223498small.jpg" />

    </div>
</template>
<script lang="ts">

export default {
    name: 'TripleImage'
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1%;
}
div img {
    width: 32.6%;
    height: 32.6%;
}
</style>