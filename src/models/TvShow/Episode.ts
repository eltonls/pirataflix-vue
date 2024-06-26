export class Episode {
    constructor(
        public id?: number,
        public name?: string,
        public overview?: string,
        public vote_average?: number,
        public vote_count?: number,
        public air_date?: string,
        public episode_number?: number,
        public production_code?: string,
        public runtime?: number,
        public season_number?: number,
        public show_id?: number,
        public still_path?: string,
    ) {}
}