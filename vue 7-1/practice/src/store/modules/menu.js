export default{
    namespaced: true,
    state:{
        items: [
            {
                url: '/products',
                text: 'Product List'
            },
            {
                url: '/cart',
                text: 'Your Cart'
            },
            {
                url: '/checkout',
                text: 'Order now'
            }
        ]
    },
    getters:{
        items(state){
            return state.items;
        }
    }
};