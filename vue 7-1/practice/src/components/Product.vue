<template>
    <div >
        <h1> {{ product.title }}</h1>
        <router-link :to="{name:'products'}">Back</router-link>   
        <hr>
        <div class="alert alert-success"></div>

        <hr>
      
        <button 
                v-if="inCart().indexOf(product.id_product) === -1"
                class="btn btn-primary"
                @click="addToCart(product.id_product)">Add to cart
        </button>
        <button 
                v-else
                class="btn btn-warning"
                @click="removeFromCart(product.id_product)">Remove from cart
        </button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex'; 
export default {
    computed: {
        id(){
            return this.$route.params.id;
        },
        product(){
            return this.$store.getters['products/item'](this.id);
        }
    },
    methods: {
        ...mapActions('cart', { 
            addToCart: 'add',
            removeFromCart: 'remove'
        }),

        ...mapGetters('cart', { 
            inCart: 'products' 
        })
    }
}
</script>