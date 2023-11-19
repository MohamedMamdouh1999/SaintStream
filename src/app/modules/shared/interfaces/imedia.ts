export interface IMedia {
  id: number,
  name: string,
  title: string,
  video: boolean,
  adult: boolean,
  overview: string,
  media_type: string,
  vote_count: number,
  popularity: number,
  poster_path: string,
  genre_ids: number[],
  vote_average: number,
  release_date: string,
  backdrop_path: string,
  original_name: string,
  first_air_date: string,
  original_title: string,
  origin_country: string[],
  original_language: string
}
