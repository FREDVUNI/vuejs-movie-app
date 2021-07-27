import { createApp } from 'vue'
import Home from './views/Home.vue';
import Moviedetail from './views/Moviedetail.vue';
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router';

const routes =[
    {
        path:'/',
        component:Home
    },
    {
        path:'/movie/:id',
        component:Moviedetail
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
const app = createApp(App);
app.use(router);
app.mount('#app');
