<template>
    <div class="hero min-h-[300px] bg-base-100">
        <div class="hero-content text-center">
            <div class="max-w-xl">
                <h1 class="text-5xl font-bold">FFVGS</h1>
                <p class="py-6"> Der Freie Fischerverein Greifensee-Schwerzenbach besteht seit 1978 und ist ein Verein mit
                    rund 170 Mitgliedern aus allen Altersklassen. Wir fördern den Angelsport und geben unser Wissen den
                    jüngeren Fischern weiter. So lernen Sie aus professioneller Sicht, wie die Fischerei Spass macht und
                    sich trotzdem mit Flora und Fauna am Wasser vereinbaren lässt.</p>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content w-full flex-col lg:flex-row">
            <img src="/images/home/1-vereisfischen.jpg" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">1. Vereisfischen</h1>
                <p class="py-6">
                    Am 1. Mai findet das alljährliche Vereisfischen statt. Das Messen findet bei gutem Wetter auf der
                    Schlosswiese und bei schlechtem Wetter in der Milchhütte in Greifensee statt.
                </p>
                <router-link class="btn btn-primary" to="dokumente#vereisfischen">Weitere Informationen (pdf)</router-link>

            </div>
        </div>
    </div>

    <div class="divider"></div>
    <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content w-full flex-col lg:flex-row-reverse">
            <img src="/images/event/jungfischerkurs/fischen2.jpg" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
            <div class="w-full sm:w-auto">
                <h1 class="text-5xl font-bold">Jungfischerkurs </h1>
                <p class="py-6"> In diesem Jahr bietet die FFVGS wieder 50 Jugendlichen ab Jahrgang 2011 bis 2015 die
                    Möglichkeit, unter professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>
                <router-link class="btn btn-primary" to="/event/jungfischerkurs">Jetzt anmelden</router-link>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content w-full flex-col lg:flex-row">
            <img src="/images/home/fisch-des-jahres-2023.jpg" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
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

export default {
    name: 'HomeView'
};
</script>

<style scoped></style>
