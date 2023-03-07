<template>
    <li class="list-item">
        <div class="first-column">
            <svg fill="#ffffff" width="27px" height="27px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path v-if="alreadyHappened()" d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
            </svg>
            <div>{{ name }}</div>
        </div>

        <div class="dates">
            <div v-for="date in dates">{{ formatDate(date) }} </div>
        </div>
    </li>
</template>
<script  lang="ts">
export default {
    name: 'ProgrammEvent',
    props: ['name', 'dates'],
    data() {
        return {

        };
    },
    methods: {
        alreadyHappened(): boolean {
            
            if (this.dates === null || this.dates.length === 0)
                return false;
            for (let date of this.dates)
                if (new Date(date) > new Date())
                    return false;
            return true;
        },
        formatDate(date: Date): string {            
            return new Date(date).toLocaleDateString('ch-DE')
        }
    }
};

</script>
<style scoped>
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--color-titles);
    margin: 0;
}

.list-item * {
    display: flex;
    align-items: center;

}


.first-column {
    display: flex;
}

.first-column svg {
    margin-right: 10px;
}

.dates {
    display: flex;
    flex-direction: column;
}
</style>