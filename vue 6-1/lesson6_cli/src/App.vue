<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
                       
    </div>
</template>

<script>
    import AppContent from './components/Content.vue';
    import AppHeader from './components/Header.vue';
    export default {
        components:{
            AppContent,
            AppHeader
        }
    }
</script>
<style>
</style>
