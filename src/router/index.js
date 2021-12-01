import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'
import Search from '@/pages/Search/Search.vue'
import Register from '@/pages/Register/Register.vue'
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        }
    ]
})