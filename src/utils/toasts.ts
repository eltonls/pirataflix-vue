
import { useToast } from 'primevue/usetoast';

// export function verifyError(){
//    // console.log(error);
//   // this.$toast.add({ severity: 'error', summary: 'Failed to connect', detail: 'The connection could not be completed!', life: 3000 });
//     const toast = useToast();
//    const verifyConnect = () =>{

//        toast.add({ severity: 'error', summary: 'Failed to connect', detail: 'The connection could not be completed!', life: 3000 });
        
//     }         

//    return verifyConnect ;
// }
// export const toast = createToast({
    
//     })

// {severity:"error",
//     summary: "Error ",
//     detail: "Ocorreu um erro",
//     life: 1000}

export class Toasts{
   // public toast = useToast()
    
    public error(){
        return { severity: 'error', summary: 'Failed to connect', detail: 'The connection could not be completed!', life: 3000 }
    }

    public success(){
        return { severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 }
    }

    public warn(){
        return { severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 }
    }

    public info(){
        return { severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 }
    }
    

}

// public mult(a: number, b: number): number {
//     return a * b;
// }