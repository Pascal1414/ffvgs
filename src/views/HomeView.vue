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
            <img src="/images/home/home.png" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">Neues Design </h1>
                <p class="py-6">
                    Die Webseite hat ein neues Design bekommen. Sie lässt sich gleich bedienen wie die vorherige Webseite.
                    Falls dir das dunkle Design nicht gefällt, kannst du es
                    <a class="link link-info" href="#theme-toggle">rechts unten in der Fusszeile</a> ändern. Das Icon zeigt
                    an, in welchem Design du dich gerade befindest. Bei Fragen zu der Webseite kannst du dich gerne über das
                    <router-link class="link link-info" to="/kontakt">Kontaktformular</router-link> melden.
                </p>
            </div>
        </div>
    </div>

    <div class="divider"></div>
    <div class="sm:hero min-h-[400px] bg-base-100">
        <div class="hero-content w-full flex-col lg:flex-row-reverse">
            <img src="/images/event/jungfischerkurs/fischen2.jpg" class="w-full sm:w-auto max-w-sm rounded-lg shadow-2xl" />
            <div class="w-full sm:w-auto">
                <h1 class="text-5xl font-bold">Jungfischerkurs </h1>
                <p class="py-6">Vielen Dank für die zahlreichen Anmeldungen für den Jungfischerkurs. </p>
                <!--p class="py-6"> In diesem Jahr bietet die FFVGS wieder 50 Jugendlichen ab Jahrgang 2011 bis 2015 die
                    Möglichkeit, unter professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>
                <router-link class="btn btn-primary" to="/event/jungfischerkurs">Jetzt anmelden</router-link-->
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
