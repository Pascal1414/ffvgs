<template>
    <div class="hero min-h-[300px] bg-base-100">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">FFVGS </h1>
                <p class="py-6"> Die Freie Fischervereinigung Greifensee Schwerzenbach Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Enim suscipit ut adipisci nemo veniam doloremque et ullam voluptas
                    corporis! Deleniti.</p>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="hero min-h-[400px] bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="/" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">Jungfischerkurs </h1>
                <p class="py-6"> In diesem Jahr bietet die FFVGS wieder 50 Jugendlichen ab Jahrgang 2011 bis 2015 die
                    Möglichkeit, unter professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>
                <router-link class="btn btn-primary" to="/event/jungfischerkurs">Jetzt anmelden</router-link>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="hero min-h-[400px] bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
            <img src="/images/home/fisch-des-jahres-2023.jpg" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">Fisch des Jahres</h1>
                <p class="py-6">
                    Der Fisch, der sich gegen andere durchsetzt und sich veränderten Lebensbedingungen anpassen kann, wurde
                    vom Schweizerischen Fischerei-Verband zum Fisch des Jahres 2023 gewählt: Der Hecht. Einer der
                    fischereilich beliebtesten und attraktivsten Fische im Lande.
                    Trotz veränderter Lebebedingungen aufgrund des Siedlungsdrucks, der Verbauung der Seeufer und des
                    Klimawandels geht es dem Hecht heute nicht schlechter als früher. Seine Bestände und Fischerträge sind
                    seit 20 Jahren stabil.
                    Quelle: <a class="link link-info" href="https://sfv-fsp.ch/home/aktuell/?load=1159">SFV</a>
                </p>
            </div>
        </div>
    </div>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeView',
});
</script>

<style scoped></style>