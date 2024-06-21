import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


createApp(App).use(PrimeVue,{
    theme: {
        preset: Aura
    }
}).use(router).mount('#app')

