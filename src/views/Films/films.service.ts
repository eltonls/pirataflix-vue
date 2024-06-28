import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"

export class FilmService{
    constructor(private _movieRest = new MoviesRest ){}
    private allMovies$: BehaviorSubject<any> = new BehaviorSubject<any>([])


    allMovies:Observable<any> = this.allMovies$.asObservable()


    getAllMovies():void{
      this._movieRest.getAllMovies().pipe().subscribe({
        next:(response)=>{
            
          this.allMovies$.next(response)
        }      })
    }


    
}