import { MoviesRest } from "../../service/rest/movie.rest";
import { BehaviorSubject, Observable } from "rxjs"
import DetailsModel from "../../models/details.model";

export class DetailService{
    constructor(private _movieRest = new MoviesRest ){}

    private dataById$: BehaviorSubject<any> = new BehaviorSubject<any>([]);


    dataById:Observable<any> = this.dataById$.asObservable()


    getDataById(id:number,mediaType:string):void{
      this._movieRest.getDataById(id,mediaType).pipe().subscribe({
        next:(response)=>{
          this.dataById$.next(response as DetailsModel)

        }
      })
    }

    
}
