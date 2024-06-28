import QueryParams from '../../models/QueryParams';
import api from '../rxjs'

export class MoviesRest {

  private _baseUrl = "/api"

    getAllDataPopular(params:QueryParams) {
      return api.get('/trending/all/day', this._baseUrl, params);

    }
    getDataById(id:number,mediaType:string) {
      return api.get(`/${mediaType}/${id}`, this._baseUrl);
    }
    getAllMovies(params:QueryParams){


      return api.get('/movie/popular', this._baseUrl, params)

    }
  
  }