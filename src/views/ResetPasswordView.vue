<template>
    <div class="hero min-h-[700px]">
        <div class="hero-content flex-col lg:flex-row-reverse gap-12">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Reset Password</h1>
                <p class="py-6">Wenn du dein Password vergessen hast kannst du es hier zurücksetzen. Es wird ein Email
                    mit einem Link gesendet worüber das Passwort zurückgesetzt werden kann.
                </p>
            </div>
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form class="card-body" @submit.prevent="submitForm">
                    <div class=" form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <p class="text-error">{{ error }}</p>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { supabase } from '@/supabase';
import router from '@/router';


let error = ref('');


function submitForm() {
    error.value = ""

    const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;

    supabase.auth.resetPasswordForEmail(email).then((data) => {
        console.log("Error", data);

        if (data.error) {
            error.value = data.error.message;
            return;
        }

        // Redirect to login
        router.push('Login');
    });
}
</script>

<style scoped></style>