export default class QueryParams {
    constructor(
        public page: number = 1,
        public sessionId?: string,
        public startData?: string,
        public endDate?: string,
        public language?: string,  
    ){}
}