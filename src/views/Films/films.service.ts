import QueryParams from "../../models/QueryParams";
import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"

export class FilmService{
    constructor(private _movieRest = new MoviesRest ){}
    private allMovies$: BehaviorSubject<any> = new BehaviorSubject<any>([])


    allMovies:Observable<any> = this.allMovies$.asObservable()


    getAllMovies(params:QueryParams):void{
      this._movieRest.getAllMovies(params).pipe().subscribe({
        next:(response)=>{
            
          this.allMovies$.next(response)
        }      })
    }


    
}