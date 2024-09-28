import NavBar from "../components/NavBar.vue";

import type { App } from "vue";

export function modulesComponent(app:App){
    app.component('Navbar',NavBar)
}