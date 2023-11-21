import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedias } from './../interfaces/imedias';
import { IGenres } from '../interfaces/igenres';
import { IPeople } from '../interfaces/ipeople';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http:HttpClient){}
  headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTY2ZTJkNjhmODAyMTY2Y2YwYzE1ZDk0MjMwZDA3YSIsInN1YiI6IjY1MWIyYmIyOTNiZDY5MDExYjhlZjVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tZ2iJsSrapyyR4IWVUH-CYG5nDoXCmSDc9x3kdyHRM',
    'accept': 'application/json'
  };
  url: string = 'https://api.themoviedb.org/3/';

  getGenres(media: string): Observable<IGenres> {
    return this.http.get<IGenres>(this.url + `genre/${media}/list?language=en`, {headers:this.headers})
  }
  getMedia(media: string, type: string, page: number = 1): Observable<IMedias> {
    return this.http.get<IMedias>(this.url + `${media}/${type}?language=en-US&page=${page}`, {headers: this.headers})
  }
  getPeople(): Observable<IPeople> {
    return this.http.get<IPeople>(this.url + `trending/person/day?language=en-US`, {headers:this.headers})
  }
}
