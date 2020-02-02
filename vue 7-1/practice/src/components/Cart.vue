<template>
    <div>
        <h1>Cart</h1>
        <hr>
        <div class="alert alert-warning" v-if="empty">
           Your Cart is empty!
        </div>
        <template v-else>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="index" v-for="(product, index) in products">
                        <td>{{product.id_product + 1}}</td>
                        <td>{{product.tsitle}}</td>
                        <td>{{product.price}}</td>
                    </tr>
                </tbody>
                
            </table>
            <button class="btn btn-success"
            @click="onOrder">Order Now</button>
        </template>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    computed:{
        ...mapGetters('cart', {
           productsInCart: 'products' 
        }),
         ...mapGetters('products', {
           productsAll: 'items' 
        }),
        products(){
            return this.productsAll.filter(elem => {
                return this.productsInCart.indexOf(elem.id_product) !== -1;
            })
        },
        empty(){
            return this.products.length === 0;
        }
    },
    methods:{
        onOrder(){
            this.$router.push('/checkout');
        }

    }
}
</script>