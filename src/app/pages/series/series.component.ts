import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { MediaService } from '../../modules/shared/services/media.service';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { IGenre } from '../../modules/shared/interfaces/igenre';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss',
})
export class SeriesComponent {
  constructor(private http: MediaService) {
    this.getGenres();
    this.getMedias('trending', 'tv/day');
    this.getMedias('tv', 'on_the_air');
    this.getMedias('tv', 'airing_today');
    this.getMedias('tv', 'popular');
    this.getMedias('tv', 'top_rated');
    this.getMedias('trending', 'person/day');
  }
  genres!: IGenre[];
  trending!: IMedia[];
  onTheAir!: IMedia[];
  airingToday!: IMedia[];
  popular!: IMedia[];
  topRated!: IMedia[];
  actors!: IMedia[];
  actresses!: IMedia[];
  getGenres(): void {
    this.http.getGenres('tv').subscribe({
      next: (data) => (this.genres = data.genres),
    });
  }
  getMedias(media: string, type: string): void {
    this.http.getMedias(media, type).subscribe({
      next: (data) => {
        if (type === 'tv/day')
          this.trending = data.results.filter(
            (media) => media.backdrop_path !== null
          );
        else if (type === 'on_the_air')
          this.onTheAir = data.results.filter(
            (media) => media.poster_path !== null
          );
        else if (type === 'airing_today')
          this.airingToday = data.results.filter(
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
