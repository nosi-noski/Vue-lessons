import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        cnt: 0,
        price: 1000,
        orderState: null
    },
    mutations: {
        minus(state){
            if( state.cnt > 0 ){
                state.cnt--;
            }
        },
        
        plus(state, payload){
            state.cnt++;
        },

        orderSend(state){
            state.orderState = 'pending';
        },

        orderDone(state){
            state.orderState = 'done';
        },

        setCnt(state, count){
            count = parseInt(+count);
            if(count < 0 ){
               count = 0;
           }
           state.cnt = count;
        }
    }, 
    getters:{
        orderState(state){
            return state.orderState;
        },

        cnt(state){
            return state.cnt;
        },

        price(state){
            return state.price;
        },

        total(state){
            return state.cnt * state.price;
        }
    },
    actions:{
        minus(store){
            store.commit('minus');
        },
        sendOrder(store, payload){
            store.commit('orderSend');
            console.log(payload)
            setTimeout( function(){
                store.commit('orderDone');
            }, 2000 )
        }
    },
    stict: process.env.NODE_ENV === 'production'
    
});