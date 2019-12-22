export default{
    namespaced: true,
    state:{
        items:[1,2,3]
        
    },
    getters:{
        items(state){
            return state.items;
        }
    },
    mutaions:{

    },
    actions:{
        
    }
}
// пример получения item из namespace-нутого модуля стора (чтобы разделить одноимённые параметры стора внутри модулей)
//   $store.state[products/itemы]