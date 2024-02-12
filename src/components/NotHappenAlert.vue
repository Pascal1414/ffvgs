<template>
    <div role="alert" class="alert alert-info mb-4">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>2024 wird {{ nameString }} leider nicht stattfinden.
            </span>
        </div>
        <router-link class="btn btn-ghost" to="/event">Mehr informationen</router-link>
    </div>
</template>
<script lang="ts">
export default {
    name: 'NotHappenAlert',
    props: {
        nameString: String
    }
}
</script>