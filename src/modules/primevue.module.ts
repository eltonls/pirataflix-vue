import Button from 'primevue/button'
import Card from "primevue/card"
import Menubar from 'primevue/menubar'

import type { App } from 'vue'

export function modulesPrimeVueComponent(app:App){
    app.component('Button',Button);
    app.component('Card',Card);
    app.component('Menubar',Menubar);

}