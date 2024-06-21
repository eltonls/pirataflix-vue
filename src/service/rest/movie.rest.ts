import api from '../rxjs'

export class MoviesRest {
    getAllDataPopular() {
      return api.get('/trending/all/day');
    }
    getMovieById(id:number) {
      return api.get(`/find/${id}`);
    }
    getDataById(id:number,mediaType:string) {
      return api.get(`/${mediaType}/${id}`);
    }


  
  }