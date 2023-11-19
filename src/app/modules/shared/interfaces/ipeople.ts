import { IPerson } from "./iperson"

export interface IPeople {
  page: number,
  results: IPerson[],
  total_pages: number,
  total_results: number
}
