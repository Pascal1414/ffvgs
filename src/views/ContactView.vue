<template>
    <div class="card w-[100%] bg-base-200 shadow-xl mb-4">
        <div class="card-body">
            <h1 class="text-2xl font-bold">Kontakt</h1>
            <form>
                <div class="form-control w-full ">
                    <label class="label" for="contact-email">
                        <span class="label-text">Email</span>
                    </label>
                    <input id="contact-email" type="text" placeholder="Email" class="input input-bordered w-full " />

                    <label class="label" for="contact-message">
                        <span class="label-text">Nachricht</span>
                    </label>
                    <textarea id="contact-message" class="textarea textarea-bordered mb-2" placeholder="Nachricht"></textarea>

                    <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>

                </div>
            </form>
        </div>
    </div>

    <div class="card w-[100%] bg-base-200 shadow-xl">
        <div class="card-body">
            <h1 class="text-2xl font-bold">Beitrittserklärung</h1>
            <p>Sehr gerne möchten wir Sie in unseren Verein aufnehmen. </p>
            <form>
                <div class="card w-[100%] bg-base-300 shadow-xl">
                    <div class="card-body gap-0 ">
                        <p class="mb-2">Ich wünsche eine Aufnahme als:</p>

                        <div v-for="membership in memberships" class="form-control mb-0">
                            <label class="label cursor-pointer justify-start">
                                <input type="radio" name="join-membership" class="radio checked:bg-red-500" checked /> <span
                                    class="label-text ml-4">{{ membership.name + ' (' + membership.price + ') ' +
                                        membership.age
                                    }}</span>
                            </label>
                        </div>
    </div>
                </div>
                
                        <div class="split-cols grid grid-cols-2 gap-[15px] mb-0 mt-3">

                            <div class="mb-0">
                                <label class="label" for="join-firstname">
                                    <span class="label-text">Vorname</span>
                                </label>
                                <input id="join-firstname" type="text" placeholder="Vorname"
                                    class="input input-bordered w-full " />

                                <label class="label" for="join-lastname">
                                    <span class="label-text">Lastname</span>
                                </label>
                                <input id="join-lastname" type="text" placeholder="Nachname"
                                    class="input input-bordered w-full " />

                                <label class="label" for="join-birthdate">
                                    <span class="label-text">Geburtsdatum</span>
                                </label>
                                <input id="join-birthdate" type="date" placeholder="Geburtsdatum"
                                    class="input input-bordered w-full " />

                            </div>
                            <div class="mb-0">
                                <label class="label" for="join-street">
                                    <span class="label-text">Strasse und Nummer</span>
                                </label>
                                <input id="join-street" type="text" placeholder="Strasse und Nummer"
                                    class="input input-bordered w-full " />

                                <label class="label" for="join-zip">
                                    <span class="label-text">PLZ</span>
                                </label>
                                <input id="join-zip" type="text" placeholder="PLZ" class="input input-bordered w-full " />

                                <label class="label" for="join-place">
                                    <span class="label-text">Ort</span>
                                </label>
                                <input id="join-place" type="text" placeholder="Ort" class="input input-bordered w-full " />

                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="label" for="join-email">
                                <span class="label-text">Email</span>
                            </label>
                            <input id="join-email" type="email" placeholder="Email" class="input input-bordered w-full " />

                            <label class="label" for="join-message">
                                <span class="label-text">Nachricht</span>
                            </label>
                            <textarea id="join-message" class="textarea textarea-bordered w-full"
                                placeholder="Nachricht"></textarea>
                        </div>                <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>

                

            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContactView',
    components: {

    },
    data() {
        return {
            memberships: [
                {
                    name: 'Jungfischer',
                    price: '50.00',
                    age: 'bis 14 Jahren'
                },
                {
                    name: 'Junior',
                    price: '50.00',
                    age: 'ab 14 Jahren'
                },
                {
                    name: 'Aktivmitglied',
                    price: '120.00',
                    age: ''
                },
                {
                    name: 'Passivmitglied',
                    price: '50.00',
                    age: ''
                },
                {
                    name: 'Veteran',
                    price: '70.00',
                    age: 'Aktivmitglied ab 65 Jahren'
                }

            ]
        };
    },
});
</script>
<style scoped>
@media (max-width: 600px) {
  .split-cols {
    @apply grid-cols-1;
    @apply gap-0;
  } 
}
</style>