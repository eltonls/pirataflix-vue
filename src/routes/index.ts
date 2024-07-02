import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Films from '../views/Films/index.vue'
import Series from '../views/Series/index.vue'
import Favorites from '../views/Favorites/index.vue'
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


        },
        {
            path:'/favorites', component: Favorites , name:'favorites'
        }


    
    ]
})



export default router