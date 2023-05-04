<template>
    <h2 class="text-4xl font-bold mb-4 flex justify-center">Berichte</h2>
    <div class="divider"></div>
    <div class="mb-4 grid gap-4 grid-cols-2 ">
        <div v-for="report in reports" class="card bg-base-200 shadow-xl">
            <div class="card-body">
                <h1 class="text-2xl font-bold">{{ report.title }}</h1>
                <p class="whitespace-pre-line">{{ report.text }}</p>
            </div>
        </div>

    </div>
</template>
<script lang="ts">


export default {
    name: 'ReportView',
    components: {
    },
    data() {
        return {
            reports: [
                {
                    title: 'Flussfischen JG – 18. September 2021',
                    text: 'Ein fantastischer Fischzug gelang unserer Jugend am Samstag, dem 18. September 2021, unter der Obhut des gastgebenden Fischereivereins Schaffhausen, deren Mitgliedern an dieser Stelle unser ausdrücklicher Dank für einen tollen Anlass gilt. \n Nach einer gemütlichen Fahrt an die Ufer des Rheins, in der deutschen Enklave Büsingen gelegen, wurden wir herzlich begrüsst und auf die bereit stehenden Boote verteilt, so dass jedem Jungfischer ein erfahrener Rheinfischer und Guide zur Seite stand; was für ein Luxus! \n Nach einer kurzen Einführung und Aufklärung über die notwendigen Sicherheitsmassnahmen ging es dann los: Durch das klare Wasser des Rheins liessen wir unsere Zapfenmontagen und Kunstköder an den Hot Spots vorbei driften und es dauerte nicht lange, bis die ersten Alet den Weg in den Feumer fanden – und was für Kaventsmänner! \n Kurzum, die Anglerherzen, alt und jung, schlugen bald im Einklang höher und als mittags Fischburger aus selbst gefangenen Fischen über dem offenen Feuer zubereitet und sodann verzehrt wurden, blieben keine Wünsche mehr offen. \n Eine weitere Session am Nachmittag brachte dann wirklich jedem Teilnehmer einen Fisch und auch die Artenvielfalt war überraschend: Neben Alet konnten wir auch Egli, Hechte sowie eine kapitale Barbe überlisten. Dabei wurden persönliche Rekorde gebrochen und «erste Hechte überhaupt» gefangen; Fische, die man niemals vergisst, wie jeder Angler weiss. Dass all dies bei herrlichstem Wetter stattfand, stand zwar im Widerspruch zur Wahrscheinlichkeit, tat der Beisslaune der Fische aber offensichtlich keinen Abbruch. \n Neben einer kameradschaftlichen Fischerei und dem dazugehörigen Plausch erfuhren wir noch einiges über die Fischerei vom treibenden Boot aus sowie das Filetieren und Verarbeiten der unterschiedlichen Fischarten, so dass noch wesentlich mehr Fischburger mit zurück nach Greifensee kamen, als sich ohnehin schon in unseren Bäuchen befanden. \n Ein besonderer Dank gilt auch noch Neumitglied Werner Desiante, der kurzerhand als Jugendwart einsprang, um den personellen Engpass an besagtem Samstag wieder ins Gleichgewicht zu bringen. Auch unsere Gastgeber vermittelten uns zu jeder Zeit nicht nur ein Gefühl von Sicherheit und grosser Gewässerkenntnis, sondern freuten sich mit uns über jeden gefangenen Fisch so, als wäre es der eigene Fang gewesen. Danke. \n Schade nur, dass auch so ein Tag zu Ende gehen muss und dementsprechend schwer fiel uns der Abschied. Statt um 17 kamen wir deshalb auch erst um 18:30 Uhr am Fischertreff an und konnten müde, aber glückliche Jungfischer – mit Beute und Heldengeschichten im Gepäck – zurück an die Eltern übergeben. \n Euer Bootswart, Ben '
                },
                {
                    title: 'Plauschfischen Aegerisee – 28. August 2021',
                    text: 'Nach zwei (sehr unterschiedlichen) Angelausflügen an den Voralpsee zog es den Obmann weiter. Die Wahl fiel auf den Ägerisee im Kanton Zug, der sowohl gut erreichbar ist als auch in den schönen Hügelzügen der Zentralschweiz eingebettet liegt. Bei der Abfahrt in Greifensee schwante uns wettertechnisch nichts Gutes. Umso erstaunter konnte später festgestellt werden, dass am Ägerisee die Sonne schien und uns einen angenehmen Tag versprach. \n Nachdem wir unser Material bis zum Sammelort transportiert und dabei unfreiwillig den ersten Kontakt mit dem hiesigen Bauern hatten (er war über die Zufahrtbewilligung der Gemeinde gelinde gesagt «not very amused»), richteten wir unser Plätzchen für das spätere Mittagessen ein. Mit einer geschützten Feuerstelle am Waldrand, einem gedeckten Kabäuschen und einem Kompost-Klo genossen wir schon fast ein Spürchen Luxus. \n Die Angelstellen waren sehr unterschiedlich. So konnte man sich gemütlich mit einem Stuhl auf die Wiese an die Schilfkante setzen oder sich ein wenig anspruchsvoller im Wald eine geeignete Uferstelle suchen. Dass für den Fang des lokal als Rötel bekannten Seesaiblings noch nicht Saison war, wussten wir. Schilf, ins Wasser gestürzte Bäume und eine steil abfallende Kante im See versprachen jedoch gute Chancen auf Hecht, Egli und weitere Arten. Ein kurzer Blick ins Wasser zeigte, dass auch tatsächlich Fische am Patrouillieren waren. Offensichtlich passte ihnen das langsam umstürzende Wetter aber nicht zu hundert Prozent. Zwar konnte man immer wieder einmal einen Biss beobachten. Auch ein Alet wurde gedrillt, dann aber wieder im Schilf verloren. Gelandet wurden schliesslich nur ein Paar Egli (bewusst mit grossem P), eine Schwale und - siehe da - ¬¬ein Kamberkrebs, der sich in bester «Cliffhanger»-Manier am Wurm festhielt. Diesen setzten wir selbstverständlich zurück, da der Krebsfang im Ägerisee verboten ist. \n Gegen Mittag begann Chefkoch Robin mit seinen fleissigen Helfern eine wärmende Stärkung zuzubereiten. Das Chilli con Carne schmeckte dann auch wunderbar und passte erst noch zu einem kräftigen Schluck Bier. Per Zufall stiess ein weiteres Grüppchen aus dem Entlebuch zu uns, welche die Feuerstelle ebenfalls für ihre Würste nutzen wollte. In bester FFVGS Manier luden wir zur gemeinsamen Gemütlichkeit. Entgegen kam uns dabei, dass es sich um Mitglieder eines «Rötelivereins» handelte, der nicht nur genialen selbstgemachten Röteli, sondern auch hervorragenden Eierlikör der Marke Eigenbrand dabeihatte. \n Gegen Nachmittag zogen dann mehr und mehr Wolken auf. Dem geselligen Zusammensein am Feuer tat dies vorerst keinen Abbruch. Irgendwann schien die Regenwahrscheinlichkeit aber so stark zuzunehmen, dass wir unsere sieben Sachen packten und langsam in Richtung des Parkplatzes wackelten. Wie sich zeigen sollte, war das Timing optimal, so dass wir auf der Heimfahrt den Tag Revue passieren lassen konnten, während der Regen auf die Frontscheiben unserer Autos prasselte. \n Euer Obmann, dä Misch '
                }
            ]
        }
    }

}
</script>
<style scoped>
@media (max-width: 1300px) {
    .grid {
        @apply grid-cols-1;
    }
}
</style>