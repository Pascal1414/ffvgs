<template>
    <nav>
        <a href="/" class="home-item">
            <div id="logo" alt="Logo"></div>
            <div>FFVGS</div>
        </a>
        <a href="/">Programm</a>
        <a href="/">Organe</a>
        <a href="/">Jugend</a>
        <a href="/">Berichte</a>
        <a href="/">Galerie</a>
        <a href="/">Kontakt</a>
        <a href="/">Boot</a>

    </nav>
</template>
<script lang="ts">

</script>

<style scoped>
* {
    --nav-height: 70px;
}

nav {
    display: flex;
    flex-direction: row;
    height: var(--nav-height);
    padding: 10px;
}

.home-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.home-item #logo {
    background-image: url('./icons/logo.png');
    height: var(--nav-height);
    width: var(--nav-height);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>