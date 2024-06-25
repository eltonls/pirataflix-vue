import api from "../rxjs";

export class ConfigRest {
    getConfig() {
        return api.get("/configuration")
    }
}