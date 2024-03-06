<template>
    <div class="hero min-h-[700px]">
        <div class="hero-content flex-col lg:flex-row-reverse gap-12">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Login</h1>
                <p class="py-6">Das Login ermöglicht es einem Administrator änderungen an der Webseite durchzuführen.
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
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" required />
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

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    supabase.auth.signInWithPassword({
        email: email,
        password: password
    }).then((data, resError) => {
        console.log("Error", data);

        if (data.error) {
            error.value = data.error.message;
            return;
        } else {
            // navigate to index page
            console.log("Login success");
            router.push('/');

        }
    });
}
</script>

<style scoped></style>