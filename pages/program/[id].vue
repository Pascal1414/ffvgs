<template>

    <div class="card w-full bg-base-200 shadow-xl">
        <div class="card-body">
            <h2 class="card-title"> {{ program?.name }}</h2>

            <span v-if="!isFetched" class="loading loading-spinner loading-lg mt-[50px] mb-[50px]"></span>

            <div v-if="isFetched && program?.description == undefined" role="alert" class="alert alert-info my-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Es wurde noch keine Beschreibung hinzugefügt.</span>
            </div>

            <div v-else class="marked" v-html="marked(program?.description || '')" />


            <div class="card-actions">
                <RouterLink to="/program" class="btn btn-primary">
                    <ClientOnly>
                        <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
                        </svg>
                    </ClientOnly>
                    Back
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Program } from '~/types/program';
import { marked } from 'marked';

const config = useRuntimeConfig()
const route = useRoute()

const isFetched = ref(false)

const program: Ref<Program | undefined> = ref(undefined)

useLazyFetch(`${config.public.apiUrl}/programs/${route.params.id}`, {
    onResponse({ request, response, options }) {
        const sanitizedResponse = sanitizeApiResponse(response._data) as Program;
        isFetched.value = true
        program.value = sanitizedResponse;
    },
    onResponseError({ request, response, options }) {
        showError({ statusCode: response.status, statusMessage: 'Page Not Found' })
    }
})
</script>
<style scoped>
@import url(assets/css/marked.css);
</style>