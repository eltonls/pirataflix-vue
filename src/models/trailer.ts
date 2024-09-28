
export default class Trailer {
    constructor(
        public iso_639_1?: string,
        public iso_3166_1?: string,
        public name?: string,
        public key?: string,
        public site?: string,
        public size?: number,
        public type?: string,
        public official?: boolean,
        public published_at?: string,
        public id?: string
    ) {}
}