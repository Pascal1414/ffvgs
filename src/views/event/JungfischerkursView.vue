<template>
    <h1 class="text-4xl font-bold mb-4">Jungfischerkurs</h1>
    <div class="grid card bg-base-200 rounded-box p-4 gap-1 mb-4">
        <p>
            Jedes Jahr bietet die FFVGS 50 Jugendlichen ab Jahrgang 2011 bis 2015 die Möglichkeit, unter
            professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>

        <p> Zuerst wird in der Theorie der Umgang mit dem Lebewesen «Fisch», der Natur und diverses
            Angeltechniken erlernt, danach wird das theoretisch Erlernte mit erfahrenen Fischern am Wasser getestet. Die
            anschliessende
            Rangverkündigung und Verabschiedung mit den Eltern runden den spannende Angelmorgen gebührend
            ab. </p>
    </div>


    <div class="card w-full bg-base-200 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Anmeldung Jungfischerkurs</h2>
            <form>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="card lg:w-[50%]">
                        <h2 class="card-title">Jugendliche oder Jugendlicher</h2>
                        <label class="label" for="course-registration-firstname">
                            <span class="label-text">Vorname</span>
                        </label>
                        <input id="course-registration-firstname" type="text" placeholder="Vorname"
                            class="input input-bordered w-full " />

                        <label class="label" for="course-registration-lastname">
                            <span class="label-text">Nachname</span>
                        </label>
                        <input id="course-registration-lastname" type="text" placeholder="Nachname"
                            class="input input-bordered w-full " />

                        <label class="label" for="course-registration-address">
                            <span class="label-text">Adresse</span>
                        </label>
                        <input id="course-registration-address" type="text" placeholder="Adresse"
                            class="input input-bordered w-full " />


                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Ort</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="Ort" class="input input-bordered w-[70%]" />
                                <input type="text" placeholder="PLZ" class="input input-bordered w-[30%]" />
                            </label>
                        </div>

                        <label class="label" for="course-registration-birthdate">
                            <span class="label-text">Geburtsdatum</span>
                        </label>
                        <input id="course-registration-birthdate" type="date" placeholder="Geburtsdatum"
                            class="input input-bordered w-full " />

                        <label class="label" for="course-registration-already-fished">
                            <span class="label-text">Schon einmal gefischt?</span>
                        </label>
                        <select id="course-registration-already-fished" class="select select-bordered w-full ">
                            <option disabled selected>Schon einmal gefischt?</option>
                            <option>ja</option>
                            <option>nein</option>
                        </select>

                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="card lg:w-[50%] flex column justify-between">
                        <div>
                            <h2 class="card-title">Erziehungsberechtigte Person</h2>
                            <label class="label" for="course-registration-parent-firstname">
                                <span class="label-text">Vorname</span>
                            </label>
                            <input id="course-registration-parent-firstname" type="text" placeholder="Vorname"
                                class="input input-bordered w-full " />

                            <label class="label" for="course-registration-parent-lastname">
                                <span class="label-text">Nachname</span>
                            </label>
                            <input id="course-registration-parent-lastname" type="text" placeholder="Nachname"
                                class="input input-bordered w-full " />

                            <label class="label" for="course-registration-parent-tel">
                                <span class="label-text">Telefonnummer</span>
                            </label>
                            <input id="course-registration-parent-tel" type="tel" placeholder="Telefonnummer"
                                class="input input-bordered w-full " />

                            <label class="label" for="course-registration-parent-email">
                                <span class="label-text">E-Mail</span>
                            </label>
                            <input id="course-registration-parent-email" type="email" placeholder="E-Mail"
                                class="input input-bordered w-full " />
                        </div>
                        <button class="btn btn-primary mt-4">Anmelden</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="carousel w-full mt-4 rounded-box">
        <div v-for="(image, index) in images" :id="'item' + index" class="carousel-item w-full">
            <img :src="image" class="w-full" />
        </div>

    </div>
    <div class="flex justify-center w-full py-2 gap-2">
        <a v-for="(image, index) in images" :href="'#item' + index" class="btn btn-xs">{{ index + 1 }}</a>

    </div>
</template>
<script lang="ts">
export default {
    name: 'Jungfischerkurs',
    data() {
        return {
            images: [
                '/images/event/jungfischerkurs/festzelt.jpg',
                '/images/event/jungfischerkurs/fischen.jpg',
                '/images/event/jungfischerkurs/fischen2.jpg',
                '/images/event/jungfischerkurs/fischen3.jpg',
                '/images/event/jungfischerkurs/schiff.jpg',
                '/images/event/jungfischerkurs/schiff-close.jpg',
                '/images/event/jungfischerkurs/zielschiessen.jpg',
            ],
        };
    },
};
</script >
<style lang="css"></style>