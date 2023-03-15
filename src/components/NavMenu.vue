<template>
    <nav>
        <div class="nav">
            <router-link to="/" class="home-item">
                <div class="logo" alt="Logo"></div>
                <span class="text">FFVGS</span>
            </router-link>


            <div @click="toggleMenu($event)" ref="menuBtn" class="menu-btn">
                <div class="menu-btn-burger"></div>
            </div>
        </div>

        <div ref="nav-items" class="nav-items" @click="closeMenu($event)">
            <router-link class="nav-item" to="/programm">Programm</router-link>
            <router-link class="nav-item" to="/ueber-uns">Organe</router-link>
            <router-link class="nav-item" to="/jugend">Jugend</router-link>
            <router-link class="nav-item" to="/bericht">Berichte</router-link>
            <router-link class="nav-item" to="/galerie">Galerie</router-link>
            <router-link class="nav-item" to="/kontakt">Kontakt</router-link>
            <router-link class="nav-item" to="/boot">Boot</router-link>
        </div>

    </nav>
</template>
<script lang="ts">

export default {
    name: "NavMenu",
    methods: {
        toggleMenu(event: Event) {
            (this.$refs.menuBtn as HTMLDivElement).classList.toggle("open");
            const navItems = this.$refs["nav-items"] as HTMLElement;
            navItems.classList.toggle("open");
        },
        closeMenu(event: Event) {
            (this.$refs.menuBtn as HTMLDivElement).classList.remove("open");
            const navItems = this.$refs["nav-items"] as HTMLElement;
            navItems.classList.remove("open");
        }
    }
}
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
    border-bottom: solid 1px rgba(197, 198, 199, .4);
}

.nav-items {
    display: flex;
    flex-direction: row;
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
        flex-direction: column;
        padding-right: 20px;
        height: fit-content;
    }

    .nav-items {
        display: block;
        max-height: 0px;
        transition: all .5s ease;
        overflow: hidden;
        margin: 0 7px;
        margin-top: 5px;
    }

    .nav-item:first-child {
        border-top: none;
    }

    .nav-item {
        padding: 7px 0px !important;
        border-top: 1px solid rgba(197, 198, 199, .4);
        font-size: 22px !important;
    }

    .nav-item:hover {
        text-decoration: none !important;
    }


    .open.nav-items {
        max-height: 500px;
    }

    .nav {
        display: flex;
        justify-content: space-between;
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