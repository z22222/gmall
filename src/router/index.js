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
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showFooter:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                showFooter:false
            }
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})