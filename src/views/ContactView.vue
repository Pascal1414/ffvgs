<template>
    <MessageForm />
    <JoinForm />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from '../components/Forms/MessageForm.vue';
import JoinForm from '../components/Forms/JoinForm.vue';

export default defineComponent({
    name: 'ContactView',
    components: {
        MessageForm,
        JoinForm
    }
});
</script>
<style scoped>
</style>