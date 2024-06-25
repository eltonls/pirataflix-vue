import api from "../rxjs";

export class TvRest {
  getAllPopularShows() {
    return api.get("/tv/popular");
  }
}
