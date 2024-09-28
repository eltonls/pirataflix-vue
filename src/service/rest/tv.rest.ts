import QueryParams from "../../models/QueryParams";
import api from "../rxjs";

export class TvRest {
  private _BASE_URL = "/api"

  getPopularTvShows(params: QueryParams) {
    return api.get("/tv/popular", this._BASE_URL, params);
  }
}
