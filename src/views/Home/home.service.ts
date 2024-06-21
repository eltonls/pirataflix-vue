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
        next:(response)=>{

          console.log(response);
          
          this.allMoviesPopular$.next(response)
        }
      })
    }
    getMovieById(id:number):void{
      this._movieRest.getMovieById(id).pipe().subscribe({
        next:(response)=>{
          this.movieById$.next(response)
        }      })
    }

    getDataById(id:number,mediaType:string):void{
      this._movieRest.getDataById(id,mediaType).pipe().subscribe({
        next:(response)=>{
          this.dataById$.next(response)

        }
      })
    }

    
}
