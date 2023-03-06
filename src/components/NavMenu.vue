<template>
    <nav>
        <a href="/" class="home-item">
            <div class="logo" alt="Logo"></div>
            <span class="text">FFVGS</span>
        </a>


        <div @click="$event.target.classList.toggle('open')" class="menu-btn">
            <div class="menu-btn-burger"></div>
        </div>

        <a class="nav-item" href="/">Programm</a>
        <a class="nav-item" href="/">Organe</a>
        <a class="nav-item" href="/">Jugend</a>
        <a class="nav-item" href="/">Berichte</a>
        <a class="nav-item" href="/">Galerie</a>
        <a class="nav-item" href="/">Kontakt</a>
        <a class="nav-item" href="/">Boot</a>


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
    border-bottom: solid 1px var(--color-text);
}

nav a {
    text-decoration: none;
}

nav .nav-item {
    color: var(--color-titles);
    padding-left: 15px;
    padding-right: 15px;
    font-size: 25px;
    display: flex;
    align-items: center;
}

nav .nav-item:hover {
    text-decoration: underline;
}

.home-item {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.home-item .logo {
    background-image: url('./icons/logo.png');
    height: var(--nav-height);
    width: var(--nav-height);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.home-item .text {
    color: var(--color-titles);
    font-size: 30px;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    margin: 0 10px;
}

@media (max-width: 1000px) {

    nav {
        justify-content: space-between;
        padding-right: 20px;
    }

    nav .nav-item {
        display: none;
    }

    .menu-btn {
        display: flex;
        right: 0;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0 10px;
    }

    /* menu-btn lines */
    .menu-btn-burger::before,
    .menu-btn-burger::after {
        position: absolute;
    }

    .menu-btn-burger,
    .menu-btn-burger::before,
    .menu-btn-burger::after {
        content: '';
        width: 35px;
        height: 4px;
        border-radius: 2px;
        transition: all .5s ease;
        background-color: var(--color-titles);
        pointer-events: none;
    }

    .menu-btn-burger::before {
        transform: translateY(-16px);
    }

    .menu-btn-burger::after {
        transform: translateY(16px);
    }

    /* Is Used when the menu-btn is open */
    .menu-btn.open .menu-btn-burger {
        background-color: transparent;
    }

    .menu-btn.open .menu-btn-burger::before {
        transform: rotate(45deg) translate(0, 0);
    }

    .menu-btn.open .menu-btn-burger::after {
        transform: rotate(-45deg) translate(0, 0);
    }
}
</style>