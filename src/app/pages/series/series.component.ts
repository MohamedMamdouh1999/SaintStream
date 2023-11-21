import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { MediaService } from '../../modules/shared/services/media.service';
import { IPerson } from '../../modules/shared/interfaces/iperson';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { IGenre } from '../../modules/shared/interfaces/igenre';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  constructor(private http: MediaService) {
    this.getGenres();
    this.getSeries('on_the_air');
    this.getSeries('airing_today');
    this.getSeries('top_rated');
    this.getSeries('popular');
    this.getPeople()
  }

  genres!: IGenre[];
  onTheAir!: IMedia[];
  airingToday!: IMedia[];
  topRated!: IMedia[];
  popular!: IMedia[];
  actors!: IPerson[];
  actresses!: IPerson[];

  getGenres(): void {
    this.http.getGenres('tv').subscribe({
      next: (data) => this.genres = data.genres
    });
  }
  getSeries(type: string): void {
    this.http.getMedia('tv', type).subscribe({
      next: (data) => {
        if (type === 'on_the_air') this.onTheAir = data.results;
        else if (type === 'airing_today') this.airingToday = data.results;
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
