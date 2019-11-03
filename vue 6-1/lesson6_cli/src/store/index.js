import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        cnt: 1,
        price: 1000
    }
    ,
    mutations: {
        minus(state){
            if( state.cnt > 1 ){
                state.cnt--;
            }
        },

        plus(state, payload){
            state.cnt += payload;
        }
    }, 
    getters:{
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
    stict: process.env.NODE_ENV === 'production'
    
});