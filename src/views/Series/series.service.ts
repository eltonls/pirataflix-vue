import { BehaviorSubject, Observable } from "rxjs";
import { TvRest } from "../../service/rest/tv.rest";
import { TvShow } from "../../models/TvShow/TvShow";

export class TvShowService {
  constructor(private _tvShowRest = new TvRest()) {}
  private tvShows$: BehaviorSubject<Array<TvShow>> = new BehaviorSubject<Array<TvShow>>(Array<TvShow>());

  tvShows: Observable<Array<TvShow>> = this.tvShows$.asObservable();
  getPopularTvShows(): void {
    this._tvShowRest
      .getPopularTvShows()
      .pipe()
      .subscribe({
        next: (response) => {
          this.tvShows$.next(response as Array<TvShow>);
        },
      });
  }
}