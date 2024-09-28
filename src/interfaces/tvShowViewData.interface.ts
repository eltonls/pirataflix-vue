import QueryParams from "../models/QueryParams";
import { TvShowResponse } from "../models/TvShow/TvShowResponse.model";

export interface tvShowViewData {
    tvShows: TvShowResponse
    query: QueryParams 
    maxNumberOfPages: number
    numberOfItemsPerPage: number
}
