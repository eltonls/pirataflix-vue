import { createApp } from 'vue'
import PrimeVue from "primevue/config"
import Aura from '@primevue/themes/aura'
import './style.css'
import App from './App.vue'
import router from './routes'
import { modulesComponent } from './modules/components.module'
import { modulesPrimeVueComponent } from './modules/primevue.module'
import { modulesPrimeIcons } from './modules/primeicons.module'
import ToastService from 'primevue/toastservice';


const app = createApp(App)

modulesComponent(app)
modulesPrimeVueComponent(app)
modulesPrimeIcons()

app.use(PrimeVue, {

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

 app.use(router)
 app.use(ToastService)
 
 
 app.mount('#app')

export default app