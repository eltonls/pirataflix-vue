export class Toasts{
    
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

