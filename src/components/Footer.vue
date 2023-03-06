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
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.footer div {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
}

.footer div h3{
    margin: 0 0 6px 0 ;
}

.footer div a{
    color: #C5C6C7;
    text-decoration: none;
    transition: 0.2s;
}
.footer div a:hover {
    color: blue;
}

</style>