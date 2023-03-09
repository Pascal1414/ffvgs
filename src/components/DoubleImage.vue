<template>
    <div>
        <img src="../assets/images/galery/Trüschenfischen/IMG_20221105_081130844small.jpg" alt="Image 1" />
        <img src="../assets/images/galery/Trüschenfischen/IMG_20221105_141223498small.jpg" />

    </div>
</template>
<script lang="ts">

export default {
    name: 'DoubleImage'
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
    width: 49.5%;
    height: 49.5%;
}
</style>