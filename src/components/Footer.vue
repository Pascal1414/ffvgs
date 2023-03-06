<template >
    <div class="footer">
        <div class="footer-element">
            <h3>Links</h3>
            <a href="">Impressum</a>
        </div>
        <div class="footer-element">
            <h3>Events</h3>
            <a href="">Jungfischerkurs</a>
            <a href="">Sommernachtsfest</a>
        </div>
        <div class="footer-element">
            <h3>Sonstiges</h3>
            <a href="">Dokumente</a>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    background-color: var(--black);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.footer div {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    margin: 0 30px 0 30px;
}

.footer div h3 {
    margin: 0 0 6px 0;
}

.footer div a {
    color: var(--color-text);
    text-decoration: none;
    transition: 0.2s;
}

.footer div a:hover {
    color: blue;
}

@media (max-width: 700px) {
    .footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 100px 10% 100px 10%;
        grid-row-gap: 100px;
    }

    .footer div {
        padding-top: 0;
        padding-bottom: 0;
    }
}
@media (max-width: 320px) {
    .footer {
        display: flex;
        flex-direction: column;
    }
}
</style>