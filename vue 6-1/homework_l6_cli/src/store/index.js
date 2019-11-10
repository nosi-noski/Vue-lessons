import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        info: [{
            name: 'Name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/

        }, {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/

        }, {
            name: 'Email',
            value: '',
            pattern: /.+/
        }, {
            name: 'Some Field 1',
            value: '',
            pattern: /.+/

        }, {
            name: 'Some Field 2',
            value: '',
            pattern: /.+/

        }],
        statuses: {
            error: 'fa fa-check-circle',
            info: 'fa fa-info-circle'
        },
        check: {},
        progress: 0,
        fieldFulled: 0,
        formSubmited: false
    },

    getters:{
        
        info(state){
            return state.info;
        },
        check(state){
            return state.check;
        },
        progress(state){
            return state.progress;
        },
        fieldFulled(state){
            return state.fieldFulled;
        },
        formSubmited(state){
            return state.formSubmited;
        },
        calcProgress(state) {
            return 100 / state.info.length * state.fieldFulled;
        }
      

    },

    mutations: {
        checkValue(state, payload) {
            
            let elem = payload.elem;
            let data = payload.data;
            let index = payload.index;
           
            state.info[index].value = data.value;
            let elemChecked = data.valid ? state.statuses.error : state.statuses.info;
            state.check[elem.name] = elemChecked;
            state.fieldFulled = 0;
            for (let a in state.check) {
                state.check[a] === state.statuses.error ? state.fieldFulled++ : 'no'
            }
            console.log('info.length: ' + state.info.length + ', fieldFulled: ' + state.fieldFulled);

        },

        toggleForm(state) {
            return state.formSubmited = !state.formSubmited;
        }
    }, 
   
    actions:{
        toggleForm(state) {
            setTimeout(function(){ 
                store.commit('toggleForm');
            }, 2000)
            
        }
    },

    stict: process.env.NODE_ENV === 'production'
    
});