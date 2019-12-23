export default{
    namespaced: true,
    state:{
        items: getProducts()
        
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
function getProducts(){
    return [
        {
            id_product: 1,
            title: 'Phone 5',
            price: 20000
        },
        {
            id_product: 2,
            title: 'Phone 6',
            price: 25000
        },
        {
            id_product: 3,
            title: 'Phone 7',
            price: 30000
        }
    ]
}