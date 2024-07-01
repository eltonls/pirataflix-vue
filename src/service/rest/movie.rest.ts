import api from '../rxjs'

export class MoviesRest {
    getAllDataPopular() {
      return api.get('/trending/all/day');
    }
    getDataById(id:number,mediaType:string) {
      return api.get(`/${mediaType}/${id}`);
    }
    getAllMovies(){
      return api.get('/movie/popular')
    }
  
  }