import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu.js';
import products from './modules/products.js';
import cart from './modules/cart.js';

export const store = new Vuex.Store({
	modules: {
		menu,
		products,
		cart
	},
	strict: process.env.NODE_ENV !== 'production'
});