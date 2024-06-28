import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Films from '../views/Films/Films.vue'

import Series from '../views/Series/index.vue'
import Unauthenticated from '../views/Unauthenticated/index.vue'
import auth from '../service/auth.service'


const authorization = new auth()

import MovieDetails from '../views/MovieDetail/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, name: 'home'
        },
        {
            path:'/films', component:Films, name:'films'
        },
        {
            path:'/series', component:Series, name:'series'
        },
        {
            path:'/:media_type/:id', component:MovieDetails, name:'moviedetails',
            // beforeEnter(){
            //     if(!authorization.isAuthenticated()){
            //         return '/unauthenticated'
            //     }
            // }
        },
        {
            path:'/unauthenticated', component:Unauthenticated , name:'unauthenticated'
        }

    
    ]
})

router.beforeEach((to,from,next)=>{

    if(to.name!=='unauthenticated' && !authorization.isAuthenticated()) next({ name: 'unauthenticated' })
        else next()
     })


export default router