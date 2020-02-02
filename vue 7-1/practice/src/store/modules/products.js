import Vue from 'vue';

export default{
    namespaced: true,
    state:{
        items: []
        //items: getProducts()
    },
    getters:{
        items(state){
            return state.items;
        },

        itemsMap(state){
            let itemsMap = {};
            let length = state.items.length;
            for (let i = 0; i < length; i++){
                let product = state.items[i];
                itemsMap[product.id_product] = product;
            }
            return itemsMap;
        },

        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        }
    },
    mutaions:{
        loadItems(state, data){
            console.log(data)
            //state.items = data;
		}
    },
    actions:{
        loadItems(store){
			//store.commit('clearItems');

			Vue.http.get('db')
					  .then(response => response.json())
					  .then(data => {
					  	 store.commit('loadItems', data);
					  });
		}
        // loadItems(store){
        //     Vue.http.get('db')
        //         .then(response => response.json())
        //         .then(data => {
        //             store.commit('loadItems', data);
        //         });
        // }


    }
}
// пример получения item из namespace-нутого модуля стора (чтобы разделить одноимённые параметры стора внутри модулей)
//   $store.state[products/itemы]
// function getProducts(){
//     return [
//         {
//             id_product: 99,
//             title: 'Phone 5',
//             price: 20000
//         },
//         {
//             id_product: 2,
//             title: 'Phone 6',
//             price: 25000
//         },
//         {
//             id_product: 3,
//             title: 'Phone 7',
//             price: 30000
//         }
//     ]
// }