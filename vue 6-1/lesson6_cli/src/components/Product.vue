<template>
    <div>
        <h3>Product Title</h3>
        <div class="price">1000</div>
        <br>
        <button class="btn btn-warning" 
                v-on:click="onMinus">-1</button>
        
        <button class="btn btn-success" 
               v-on:click="onPlus">+1</button>
       
    </div>
</template>
<script>
    export default {
        methods:{
            onMinus(){
                this.$store.commit('minus');
            },
            onPlus(){
                this.$store.commit('plus', 1);
            }
        }
    }
</script>
<style>
</style>
