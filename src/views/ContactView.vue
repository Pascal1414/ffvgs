<template>
    <MessageForm />
   
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from '../components/MessageForm.vue';
export default defineComponent({
    name: 'ContactView',
    components: {
        MessageForm
    }
});
</script>
<style scoped></style>