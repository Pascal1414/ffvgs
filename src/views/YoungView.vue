<template>
    <h1 class="text-4xl font-bold mb-4">Jugend</h1>
    <p class="mb-4">Die FFVGS legt grossen Wert auf die Jugendförderung und die professionelle Schulung durch erfahrene Fischer
        und den Umgang in und mit der Natur.<br>
        Jedes Jahr im Mai führen wir einen Jungfischerkurs und ein Jugendfischen durch. An diesem zweitägigen Kurs
        werden die Kinder von erfahrenen Instruktoren in die Fischerei eingeführt.<br>
        Im Jungfischerkurs lernen die Kinder in der Theorie alles über Fischereivorschriften, Anatomie der Fische,
        Angeltechnik und nicht zuletzt den richtigen Umgang mit dem Lebewesen Fisch.<br>
        Am Jugendfischen wird das theoretisch Gelernte in der Praxis getestet und hoffentlich mit einem schönen Fang
        belohnt.
    </p>
    <slideshow :images="images" />
</template>
<script lang="ts">
import Slideshow from "@/components/Slideshow.vue";

export default {
    name: "YoungView",
    components: {
        Slideshow
    },
    data() {
        return {
            images: [
                {
                    src: '/images/young/jugendfischen.jpg',
                    alt: 'Image 1',
                },
                {
                    src: '/images/young/jugendfischensteg.jpg',
                    alt: 'Image 2',
                },
                {
                    src: '/images/young/jugenfischenknoten.jpg',
                    alt: 'Image 3',
                },
            ],
        };
    }
}
</script>
<style scoped></style>