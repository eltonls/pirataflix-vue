import QueryParams from '../../models/QueryParams';
import api from '../rxjs'

export class MoviesRest {
    getAllDataPopular(params:QueryParams) {
      return api.get('/trending/all/day',params);
    }
    getDataById(id:number,mediaType:string) {
      return api.get(`/${mediaType}/${id}`);
    }
    getAllMovies(params:QueryParams){

      return api.get('/movie/popular',params)
    }
  
  }