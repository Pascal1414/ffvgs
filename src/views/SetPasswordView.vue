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
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <p class="text-error">{{ error }}</p>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Update Password</button>
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

    const password = (document.querySelector('input[type="password"]') as HTMLInputElement).value;

    supabase.auth.updateUser({
        password: password
    }).then((data, resError) => {
        if (data.error) {
            error.value = data.error.message;
            return;
        }

        router.push({ name: 'login' });
    });
}
</script>