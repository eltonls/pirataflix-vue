import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"

import { TvShow } from "../../models/TvShow/TvShow";
import { TrailerRest } from "../../service/rest/trailer.rest";


export class DetailService{
    constructor(private _movieRest = new MoviesRest, private _trailerRest = new TrailerRest ){}

    private dataById$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private trailer$: BehaviorSubject<any> = new BehaviorSubject<any>({});


    dataById:Observable<any> = this.dataById$.asObservable()

    getDataById(id:number,mediaType:string):void{
      this._movieRest.getDataById(id,mediaType).pipe().subscribe({

        next:(response)=>{
          this.dataById$.next(response as TvShow)



        }
      })
    }

    trailer:Observable<any> = this.trailer$.asObservable()
    getTrailerById(id: number, mediaType: string): void {
      if(mediaType === "movie") {
        this._trailerRest.getMovieTrailer(id).pipe().subscribe({
          next: (response) => {
            this.trailer$.next(response)
          }
        })
      } 

      if(mediaType === "tv") {
        this._trailerRest.getTvShowTrailer(id).pipe().subscribe({
          next: (response) => {
            this.trailer$.next(response)
          }
        })
      }
    }
}
