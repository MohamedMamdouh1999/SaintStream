import { IMedia } from "./imedia"

interface IDates {
  maximum: string,
  minimum: string
}

export interface IMedias {
  page: number,
  dates: IDates,
  results: IMedia[],
  total_pages: number,
  total_results: number
}
