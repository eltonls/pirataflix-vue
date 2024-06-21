import DetailsModel from "./details.model";
export class ViewDetails {
    constructor(
        public data: DetailsModel,
        public id: number,
        public mediaType: string,
        public prefixUrlImage: string,
    ) {}
  }