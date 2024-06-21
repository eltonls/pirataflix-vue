

  class Genre {
    constructor(
        public id: number,
        public name: string
    ){}

  }
  
  class ProductionCompany {
    constructor(
        public id: number,
        public logo_path: string | null,
        public name: string,
        public origin_country: string,
    ){}

  }
  
  class ProductionCountry {
    constructor(
        public iso_3166_1: string,
        public name: string,
    ){}
  }
  
  class SpokenLanguage {
    constructor(
        public english_name: string,
        public iso_639_1: string,
        public name: string,

    ){}
  }
  
  export default class DetailsModel {
    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public belongs_to_collection: null | any,
        public budget: number,
        public genres: Genre[],
        public homepage: string,
        public id: number,
        public imdb_id: string,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public production_companies: ProductionCompany[],
        public production_countries: ProductionCountry[],
        public release_date: string,
        public  revenue: number,
        public runtime: number,
        public spoken_languages: SpokenLanguage[],
        public status: string,
        public tagline: string,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number,
    ){}
 
  }
  