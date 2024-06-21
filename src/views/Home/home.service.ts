import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"

export class HomeService{
    constructor(private _movieRest = new MoviesRest ){}
    private allMoviesPopular$: BehaviorSubject<any> = new BehaviorSubject<any>([])
    private movieById$: BehaviorSubject<any> = new BehaviorSubject<any>([])
    private dataById$: BehaviorSubject<any> = new BehaviorSubject<any>([])

    allMoviesPopular:Observable<any> = this.allMoviesPopular$.asObservable()
    movieById:Observable<any> = this.movieById$.asObservable()
    dataById:Observable<any> = this.dataById$.asObservable()

    getAllMoviesPopular():void {     
      this._movieRest.getAllDataPopular().pipe().subscribe({

        next:(response)=>         
          this.allMoviesPopular$.next(response)
        
      })
    }
    
}
