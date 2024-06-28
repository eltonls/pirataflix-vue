export default class auth{
    isAuthenticated(){
        if(import.meta.env.VITE_BEARER_TOKEN){
            return true
        }else return false
    }
}