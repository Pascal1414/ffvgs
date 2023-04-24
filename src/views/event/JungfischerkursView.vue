<template>
    <h1 class="text-4xl font-bold mb-4">Jungfischerkurs</h1>

    <div class="flex flex-col mb-4 w-full lg:flex-row">
        <div class="  items-center lg:w-[50%] p-4 card bg-base-200 rounded-box ">
            <p>
                Jedes Jahr bietet die FFVGS 50 Jugendlichen ab Jahrgang 2011 bis 2015 die Möglichkeit, unter
                professioneller Anleitung einen Einblick in die Freizeit-Angelei zu erhalten.</p>

            <p> Zuerst wird in der Theorie der Umgang mit dem Lebewesen «Fisch», der Natur und diverses
                Angeltechniken erlernt, danach wird das theoretisch Erlernte mit erfahrenen Fischern am Wasser getestet. Die
                anschliessende
                Rangverkündigung und Verabschiedung mit den Eltern runden den spannende Angelmorgen gebührend
                ab. </p>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div class="grid flex-grow lg:w-[50%] p-4 card bg-base-200 rounded-box place-items-center">
            <slideshow class="double-item  " :images="images" />
        </div>
    </div>

    <div class="card w-full bg-base-200 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Anmeldung Jungfischerkurs</h2>
            <form name="registration-jungfischerkurs" method="POST" netlify>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="card lg:w-[50%]">
                        <h2 class="card-title">Jugendliche oder Jugendlicher</h2>
                        <label class="label" for="course-registration-firstname">
                            <span class="label-text">Vorname</span>
                        </label>
                        <input id="course-registration-firstname" name="firstname" type="text" placeholder="Vorname"
                            class="input input-bordered w-full" required />

                        <label class="label" for="course-registration-lastname">
                            <span class="label-text">Nachname</span>
                        </label>
                        <input id="course-registration-lastname" name="lastname" type="text" placeholder="Nachname"
                            class="input input-bordered w-full" required />

                        <label class="label" for="course-registration-address">
                            <span class="label-text">Adresse</span>
                        </label>
                        <input id="course-registration-address" name="address" type="text" placeholder="Adresse"
                            class="input input-bordered w-full " required />

                        <div class="form-control">
                            <label for="course-registration-city" class="label">
                                <span class="label-text">Ort</span>
                            </label>
                            <label class="input-group">
                                <input type="text" id="course-registration-city" name="city" placeholder="Ort"
                                    class="input input-bordered w-[70%]" required />
                                <input id="course-registration-zip" name="zip" type="text" placeholder="PLZ"
                                    class="input input-bordered w-[30%]" required />
                            </label>
                        </div>

                        <label class="label" for="course-registration-birthdate">
                            <span class="label-text">Geburtsdatum</span>
                        </label>
                        <input id="course-registration-birthdate" name="birthdate" type="date" placeholder="Geburtsdatum"
                            class="input input-bordered w-full " required />

                        <label class="label" for="course-registration-already-fished">
                            <span class="label-text">Schon einmal gefischt?</span>
                        </label>
                        <select id="course-registration-already-fished" name="already-fished"
                            class="select select-bordered w-full" required>
                            <option disabled selected hidden value="">Schon einmal gefischt?</option>
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
                            <input id="course-registration-parent-firstname" name="firstname" type="text"
                                placeholder="Vorname" class="input input-bordered w-full" required />

                            <label class="label" for="course-registration-parent-lastname">
                                <span class="label-text">Nachname</span>
                            </label>
                            <input id="course-registration-parent-lastname" name="lastname" type="text"
                                placeholder="Nachname" class="input input-bordered w-full" required />

                            <label class="label" for="course-registration-parent-tel">
                                <span class="label-text">Telefonnummer</span>
                            </label>
                            <input id="course-registration-parent-tel" name="parent-tel" type="tel"
                                placeholder="Telefonnummer" class="input input-bordered w-full" required />

                            <label class="label" for="course-registration-parent-email">
                                <span class="label-text">E-Mail</span>
                            </label>
                            <input id="course-registration-parent-email" name="parent-email" type="email"
                                placeholder="E-Mail" class="input input-bordered w-full" required />
                        </div>
                        <button class="btn btn-primary mt-4">Anmelden</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import Slideshow from '@/components/Slideshow.vue';

export default {
    name: 'Jungfischerkurs',
    data() {
        return {
            images: [
                { src: '/images/event/jungfischerkurs/festzelt.jpg', alt: 'Festzelt' },
                { src: '/images/event/jungfischerkurs/fischen.jpg', alt: 'Fischen' },
                { src: '/images/event/jungfischerkurs/fischen2.jpg', alt: 'Fischen' },
                { src: '/images/event/jungfischerkurs/fischen3.jpg', alt: 'Fischen' },
                { src: '/images/event/jungfischerkurs/schiff.jpg', alt: 'Schiff' },
                { src: '/images/event/jungfischerkurs/schiff-close.jpg', alt: 'Schiff' },
                { src: '/images/event/jungfischerkurs/zielschiessen.jpg', alt: 'Zielschiessen' }
            ],
        };
    },
    components: {
        Slideshow,
    }
};
</script >
<style lang="css"></style>