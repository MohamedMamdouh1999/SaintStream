import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedias } from './../interfaces/imedias';
import { IGenres } from '../interfaces/igenres';
import { IMovie } from '../interfaces/imovie';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}
  headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTY2ZTJkNjhmODAyMTY2Y2YwYzE1ZDk0MjMwZDA3YSIsInN1YiI6IjY1MWIyYmIyOTNiZDY5MDExYjhlZjVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tZ2iJsSrapyyR4IWVUH-CYG5nDoXCmSDc9x3kdyHRM',
    accept: 'application/json',
  };
  url: string = 'https://api.themoviedb.org/3/';
  getGenres(media: string): Observable<IGenres> {
    return this.http.get<IGenres>(
      this.url + `genre/${media}/list?language=en-US`,
      { headers: this.headers }
    );
  }
  getMedias(media: string, type: string): Observable<IMedias> {
    return this.http.get<IMedias>(`${this.url}${media}/${type}?language=en-US`, { headers: this.headers });
  }
  getMedia(media: string, id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.url}${media}/${id}?language=en-US`, { headers: this.headers });
  }
}

// genre    -  movie         =>   genre     movie/list
// genre    -  tv            =>   genre     tv/list
// ======================================================
// trending -  movie         =>   trending  movie/day
// trending -  people        =>   trending  person/day
// trending -  tv            =>   trending  tv/day
// ======================================================
// movie    -  upcoming      =>   movie     upcoming
// movie    -  now playing   =>   movie     now_playing
// movie    -  popular       =>   movie     popular
// movie    -  top rated     =>   movie     top_rated
// ======================================================
// tv       -  on the air    =>   tv        on_the_air
// tv       -  airing today  =>   tv        airing_today
// tv       -  popular       =>   tv        popular
// tv       -  top rated     =>   tv        top_rated
// ======================================================
