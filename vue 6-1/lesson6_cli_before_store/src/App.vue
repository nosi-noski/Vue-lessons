<template>
    <div>
        <app-header :cnt="cnt"></app-header>
        <app-content :cnt="cnt"  
                     @minus="onMinus"
                     @plus="onPlus"></app-content>
                       
    </div>
</template>

<script>
    import AppContent from './components/Content.vue';
    import AppHeader from './components/Header.vue';
    export default {
        components:{
            AppContent,
            AppHeader
        },
        name: 'app',
        data () { 
            return{
                cnt:0
            } 
        },
        methods:{
            onMinus(){
                if(this.cnt > 1){
                    this.cnt--;
                }
            },
            onPlus(){
                this.cnt++;
            }
        }
    }
</script>
<style>
</style>
