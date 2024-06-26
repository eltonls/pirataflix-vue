import { createApp } from 'vue'
import PrimeVue from "primevue/config"
import Card from "primevue/card"
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import './style.css'
import App from './App.vue'
import router from './routes'

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                cssLayer: {
                    name: "primevue",
                    order: "tailwind-base, primevue, tailwind-utilities"
                }
            }
        }
    })
    .use(router)
    .component("Button", Button)
    .component("Card", Card)
    .mount('#app')
