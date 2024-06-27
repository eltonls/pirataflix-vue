import { TvShow } from "./TvShow"

export class TvShowResponse {
    constructor(
        public page?: number,
        public results?: Array<TvShow>,
        public totalPages?: number,
        public totalResults?: number
    ){}
}