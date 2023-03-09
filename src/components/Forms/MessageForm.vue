<template>
    <h1>Kontakt</h1>
    <form>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" />
        </div>

        <div>
            <label for="message">Nachricht</label>
            <textarea id="message" name="message" placeholder="Nachricht"></textarea>
        </div>
        
        <button type="submit">Absenden</button>
    </form>
</template>
<script lang="ts"></script>
<style scoped>
form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
</style>