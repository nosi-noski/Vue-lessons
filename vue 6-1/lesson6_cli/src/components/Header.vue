<template>
   <header>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <h2>Site</h2>
                    <app-cart></app-cart>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import AppCart from './Cart.vue';
    export default {
        props:['cnt'],
        components:{
            AppCart
        }
    }
</script>
<style>
</style>