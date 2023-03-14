<template>
    <div id="jungfischerkurs">
        <h1>Jungfischerkurs</h1>
        <p>
            Jedes Jahr bietet die FFVGS 50 Jugendlichen ab Jahrgang 2011 bis 2015 die Möglichkeit, unter
            professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.<br>
            Zuerst wird in der Theorie der Umgang mit dem Lebewesen «Fisch», der Natur und diverses
            Angeltechniken erlernt, danach wird das theoretisch Erlernte mit erfahrenen Fischern am Wasser getestet. Die
            anschliessende
            Rangverkündigung und Verabschiedung mit den Eltern runden den spannende Angelmorgen gebührend
            ab.
        </p>

        <RegistrationJungfischerkursForm />
    </div>
</template>
<script lang="ts">
import RegistrationJungfischerkursForm from '@/components/forms/RegistrationJungfischerkursForm.vue';
export default {
    name: 'Jungfischerkurs',
    components: {
        RegistrationJungfischerkursForm
    }
};
</script >
<style lang="css"></style>