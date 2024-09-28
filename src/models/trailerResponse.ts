import Trailer from "./trailer";

export default class TrailerResponse {
    constructor(
        public id?: number,
        public results?: Trailer[]
    ) {}
}