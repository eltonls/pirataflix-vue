import api from "../rxjs";

export class TvRest {
  getPopularTvShows() {
    return api.get("/tv/popular");
  }
}
