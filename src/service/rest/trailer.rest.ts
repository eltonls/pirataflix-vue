import api from "../rxjs";

export class TrailerRest {
    private _baseURL = "/api"

    getTvShowTrailer(id: number) {
        return api.get(`/tv/${id}/videos`, this._baseURL)
    }

    getMovieTrailer(id: number) {
        return api.get(`/movie/${id}/videos`, this._baseURL)
    }
}