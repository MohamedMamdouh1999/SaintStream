import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { MediaService } from '../../modules/shared/services/media.service';
import { IMedia } from './../../modules/shared/interfaces/imedia';
import { IGenre } from '../../modules/shared/interfaces/igenre';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  constructor(private http: MediaService) {
    this.getGenres();
    this.getMedias('trending', 'movie/day');
    this.getMedias('movie', 'upcoming');
    this.getMedias('movie', 'now_playing');
    this.getMedias('movie', 'popular');
    this.getMedias('movie', 'top_rated');
    this.getMedias('trending', 'person/day');
  }
  genres!: IGenre[];
  trending!: IMedia[];
  upComing!: IMedia[];
  nowPlaying!: IMedia[];
  popular!: IMedia[];
  topRated!: IMedia[];
  actors!: IMedia[];
  actresses!: IMedia[];
  getGenres(): void {
    this.http.getGenres('movie').subscribe({
      next: (data) => (this.genres = data.genres),
    });
  }
  getMedias(media: string, type: string): void {
    this.http.getMedias(media, type).subscribe({
      next: (data) => {
        if (type === 'movie/day')
          this.trending = data.results.filter(
            (media) => media.backdrop_path !== null
          );
        else if (type === 'upcoming')
          this.upComing = data.results.filter(
            (media) => media.poster_path !== null
          );
        else if (type === 'now_playing')
          this.nowPlaying = data.results.filter(
            (media) => media.poster_path !== null
          );
        else if (type === 'popular')
          this.popular = data.results.filter(
            (media) => media.poster_path !== null
          );
        else if (type === 'top_rated')
          this.topRated = data.results.filter(
            (media) => media.poster_path !== null
          );
        else if (type === 'person/day') {
          this.actors = data.results.filter(
            (media) => media.profile_path !== null && media.gender === 2
          );
          this.actresses = data.results.filter(
            (media) => media.profile_path !== null && media.gender === 1
          );
        }
      },
    });
  }
}
