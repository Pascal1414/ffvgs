<template>
    <li class="list-item">
    <input type="checkbox" v-if="alreadyHappened()" />
        <div>{{ name }}</div>
        <div>{{ date }}</div>
    </li>
</template>
<script  lang="ts">

export default {
    name: 'ProgrammEvent',
    props: ['name', 'date'],
    data() {
        return {

        };
    },
    created() {
    },
    methods: {
        alreadyHappened() {
           const date =  new Date(this.date)
           const now = new Date();
           console.log(this.date);
           
           console.log(date);
           console.log(now);
           
           
            return     false     ;
        }
    }
};

</script>
<style scoped>
.list-item{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid var(--color-titles);
    margin:  0;
}</style>