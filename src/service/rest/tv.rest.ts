import QueryParams from "../../models/QueryParams";
import api from "../rxjs";

export class TvRest {
  getPopularTvShows(params: QueryParams) {
    return api.get("/tv/popular", params);
  }
}
