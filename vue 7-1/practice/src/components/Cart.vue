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
                        <th>Title</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        :key="index" 
                        v-for="(product, index) in products"
                    >
                        <td>{{product.id_product + 1}}</td>
                        <td>{{product.title}}</td>
                        <td>{{product.price}}</td>
                        <td> 
                            <button 
                                class="btn btn-warning"
                                @click="removeFromCart(product.id_product)"
                            >Remove from cart
                            </button>
                        </td>
                    </tr>
					<tr>
						 <td  colspan="2"><div class="total-price-title">Total price:</div></td>
						 <td><div class="total-price-value"> {{ calcTotal }}</div></td>
                         <td>
                              <button 
                                class="btn btn-warning"
                                @click="removeAll()"
                            >Remove All
                            </button>
                         </td>
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
import {mapActions} from 'vuex';

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
		},
		calcTotal(){
			
			let total = 0;
			
			if( this.products.length > 0 ){
				total = this.products.reduce( function(total, curr){
					
					return total + curr.price;
				}, 0);
				return total;
			}
			return total;
		}
    },
    methods:{
        ...mapActions('cart', { 
            removeFromCart: 'remove',
            removeAll : 'removeAll'
        }),
        onOrder(){
            this.$router.push('/checkout');
        },
        delRow(id_product){
            console.log('id_product: ' + id_product);
        }

    }
}
</script>
<style>
	.total-price-title{
		float:right;
	}
</style>