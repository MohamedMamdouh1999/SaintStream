import { Component } from '@angular/core';
import { MediaService } from '../../modules/shared/services/media.service';
import { SharedModule } from '../../modules/shared/shared.module';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { IGenre } from '../../modules/shared/interfaces/igenre';
import { IPerson } from '../../modules/shared/interfaces/iperson';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private http: MediaService) {
    this.getGenres();
    this.getMovies('upcoming');
    this.getMovies('now_playing');
    this.getMovies('top_rated');
    this.getMovies('popular');
    this.getPeople()
  }

  genres!: IGenre[];
  upComing!: IMedia[];
  nowPlaying!: IMedia[];
  topRated!: IMedia[];
  popular!: IMedia[];
  actors!: IPerson[];
  actresses!: IPerson[];

  getGenres(): void {
    this.http.getGenres('movie').subscribe({
      next: (data) => this.genres = data.genres
    });
  }
  getMovies(type: string): void {
    this.http.getMedia('movie', type).subscribe({
      next: (data) => {
        if (type === 'upcoming') this.upComing = data.results;
        else if (type === 'now_playing') this.nowPlaying = data.results;
        else if (type === 'top_rated') this.topRated = data.results;
        else if (type === 'popular') this.popular = data.results;
      }
    });
  }
  getPeople(): void {
    this.http.getPeople().subscribe({
      next: (data) => {
        this.actors = data.results.filter(actor => actor.gender === 2)
        this.actresses = data.results.filter(actress => actress.gender === 1)
      }
    });
  }
}
