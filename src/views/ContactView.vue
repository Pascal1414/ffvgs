<template>
    <MessageForm />
    <JoinForm />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from '../components/forms/MessageForm.vue';
import JoinForm from '../components/forms/JoinForm.vue';

export default defineComponent({
    name: 'ContactView',
    components: {
        MessageForm,
        JoinForm
    }
});
</script>
<style scoped></style>