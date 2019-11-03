<template>
    <div>
        <h2>Product Title</h2>
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
                this.$emit("minus");
            },
            onPlus(){
                this.$emit("plus");
            }
        }
    }
</script>
<style>
</style>
