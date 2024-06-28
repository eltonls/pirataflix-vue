import QueryParams from "../../models/QueryParams";
import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"

export class HomeService{
    constructor(private _movieRest = new MoviesRest ){}
    private allMoviesPopular$: BehaviorSubject<any> = new BehaviorSubject<any>([])

    allMoviesPopular:Observable<any> = this.allMoviesPopular$.asObservable()




    getAllMoviesPopular(params: QueryParams):void {     
      this._movieRest.getAllDataPopular(params).pipe().subscribe({



        next:(response)=>         
          this.allMoviesPopular$.next(response)
        
      })
    }

    
}
