interface SpokenLanguages {
  name: string,
  iso_639_1: string,
  english_name: string
}
interface ProductionCountries {
  name: string,
  iso_3166_1: string
}
export interface ProductionCompanies {
  id: number,
  name: string,
  logo_path: string,
  origin_country: string
}
interface BelongsToCollection {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}
interface Genres {
  id: number,
  name: string
}
export interface IMovie {
  id: number,
  title: string,
  budget: number,
  adult: boolean,
  status: string,
  video: boolean,
  tagline: string,
  imdb_id: string,
  runtime: number,
  revenue: number,
  overview: string,
  homepage: string,
  genres: Genres[],
  vote_count: number,
  popularity: number,
  poster_path: string,
  vote_average: number,
  release_date: string,
  backdrop_path: string,
  original_title: string,
  original_language: string,
  spoken_languages: SpokenLanguages[],
  belongs_to_collection: BelongsToCollection,
  production_companies: ProductionCompanies[],
  production_countries: ProductionCountries[]
}
