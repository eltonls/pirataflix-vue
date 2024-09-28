import { Country } from "./Country";
import { Creator } from "./Creator";
import { Episode } from "./Episode";
import { Genre } from "./Genre";
import { Network } from "./Network";
import { ProductionCompany } from "./ProductionCompany";
import { Season } from "./Season";
import { SpokenLanguage } from "./SpokenLanguage";

export class TvShow {
  constructor(
    public adult?: boolean,
    public backdrop_path?: string,
    public belongs_to_collection?: null | any,
    public budget?: number,
    public genres?: Genre[],
    public homepage?: string,
    public id?: number,
    public imdb_id?: string,
    public original_language?: string,
    public original_title?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string,
    public production_companies?: ProductionCompany[],
    public production_countries?: Country[],
    public release_date?: string,
    public revenue?: number,
    public runtime?: number,
    public spoken_languages?: SpokenLanguage[],
    public status?: string,
    public tagline?: string,
    public title?: string,
    public video?: boolean,
    public vote_average?: number,
    public vote_count?: number,
    public original_name?: string,
    public created_by?: Creator[],
    public episode_run_time?: number[],
    public first_air_date?: string,
    public in_production?: boolean,
    public languages?: string[],
    public last_air_date?: string,
    public last_episode_to_air?: Episode,
    public name?: string,
    public networks?: Network[],
    public number_of_episodes?: number,
    public number_of_seasons?: number,
    public origin_country?: string[],
    public seasons?: Season[],
    public type?: string,
    public media_type?: string
    

  ) {}
}