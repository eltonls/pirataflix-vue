import { BehaviorSubject, Observable } from "rxjs";
import { TvRest } from "../../service/rest/tv.rest";
import { TvShow } from "../../models/TvShow/TvShow";
import QueryParams from "../../models/QueryParams";

export class TvShowService {
  constructor(private _tvShowRest = new TvRest()) {}
  private tvShows$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  tvShows: Observable<Array<TvShow>> = this.tvShows$.asObservable();
  getPopularTvShows(params: QueryParams): void {
    this._tvShowRest
      .getPopularTvShows(params)
      .pipe()
      .subscribe({
        next: (response) => {
          this.tvShows$.next(response as Array<TvShow>);
        },
      });
  }
}
