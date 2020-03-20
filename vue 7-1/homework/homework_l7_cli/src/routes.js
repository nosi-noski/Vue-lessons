import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from './components/Main';
import Result from './components/Result'; 

const routes = [
    {
        path: '',
        redirect: { name: 'main'}
    },{
        name: 'main',
        path: '/main',
        component: Main
    },{
        name: 'result',
        path: '/result',
        component: Result
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});