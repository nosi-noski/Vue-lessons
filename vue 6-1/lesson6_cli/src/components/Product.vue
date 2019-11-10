<template>
    <div>
        <h3>Product Title</h3>
        <div class="price">Price: {{price}}</div>
        <br>
        
        

        <button class="btn btn-warning" 
                v-on:click="minus">-1</button>
        
        <button class="btn btn-success" 
                v-on:click="plus">+1</button>
        <input type="text" :value="cnt" @input="onInput">
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        computed:{
            price(){
                return this.$store.getters.price;
            },
             ...mapGetters([
                  'price'
                //, 'cnt'
            ]),
            cnt: {
                get(){
                    return this.$store.state.cnt;
                },
                set(value){
                    this.$store.commit('setCnt', value);
                }
            }
        },
        methods:{
            ...mapMutations( [ 'plus' ] ),
            ...mapActions( [ 'minus' ] ),
            onInput(e){
                this.$store.commit( 'setCnt', e.target.value );
            }
            /*,
            onMinus(){
                this.$store.commit('minus');
            },
            onPlus(){
                this.$store.commit('plus', 1);
            }*/
        }
    }
</script>
<style>
</style>
