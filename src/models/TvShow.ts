export class TvShow {
    constructor(
        public adult?: boolean,
        public backdrop_path?: string,
        public created_by?: Creator[],
        public episode_run_time?: number[],
        public first_air_date?: string,
        public genres?: Genre[],
        public homepage?: string,
        public id?: number,
        public in_production?: boolean,
        public languages?: string[],
        public last_air_date?: string,
        public last_episode_to_air?: Episode,
        public name?: string,
        public networks?: Network[],
        public number_of_episodes?: number,
        public number_of_seasons?: number,
        public origin_country?: string[],
        public original_language?: string,
        public original_name?: string,
        public overview?: string,
        public popularity?: number,
        public poster_path?: string,
        public production_companies?: ProductionCompany[],
        public production_countries?: Country[],
        public seasons?: Season[],
        public spoken_languages?: SpokenLanguage[],
        public status?: string,
        public tagline?: string,
        public type?: string,
        public vote_average?: number,
        public vote_count?: number,
    ) {}
}

interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path?: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
