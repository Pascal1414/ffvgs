<template>
    <div class="card w-[100%] bg-base-200 shadow-xl">
        <div class="card-body">
            <h1 class="text-2xl font-bold">Kontakt</h1>
            <form>
                <div class="form-control w-full ">
                    <label class="label" for="contact-email">
                        <span class="label-text">Email</span>
                    </label>
                    <input id="contact-email" type="text" placeholder="Email"
                        class="input input-bordered w-full " />

                    <label class="label" for="contact-message">
                        <span class="label-text">Nachricht</span>
                    </label>
                    <textarea id="contact-message" class="textarea textarea-bordered" placeholder="Nachricht"></textarea>

                    <button type="submit" class="btn btn-primary mt-3 max-w-xs">Absenden</button>

                </div>
            </form>
        </div>
    </div>

    <MessageForm />
    <JoinForm />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import JoinForm from '../components/forms/JoinForm.vue';

export default defineComponent({
    name: 'ContactView',
    components: {
        JoinForm
    }
});
</script>
<style scoped></style>