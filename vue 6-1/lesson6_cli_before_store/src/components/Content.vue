<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <h1>Site</h1>
                    <app-product
                        @minus="$emit('minus', $event)"
                        @plus="$emit('plus', $event)"
                    >
                    </app-product>
                </div>
            </div>
        </div>
    </section>   
</template>
<script>
    import AppProduct from './Product.vue';
    export default {
        components:{
            AppProduct
        }
    }
</script>
<style>
</style>