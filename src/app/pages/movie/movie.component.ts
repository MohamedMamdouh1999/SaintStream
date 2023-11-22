import { Component } from '@angular/core';
import { MediaService } from '../../modules/shared/services/media.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../modules/shared/interfaces/imovie';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { SharedModule } from '../../modules/shared/shared.module';
import { IGenre } from '../../modules/shared/interfaces/igenre';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  constructor(private http: MediaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      this.getGenres()
      this.getMovie(Number(param.get('id')))
      this.getSimilar(Number(param.get('id')), 'similar')
      this.getSimilar(Number(param.get('id')), 'recommendations')
    })
  }
  movie: IMovie = {} as IMovie;
  genres!: IGenre[];
  similar: IMedia[] = [];
  recommendations: IMedia[] = [];
  getGenres(): void {
    this.http.getGenres('movie').subscribe({
      next: (data) => (this.genres = data.genres),
    });
  }
  getMovie(id: number): void {
    this.http.getMedia('movie', id).subscribe({
      next: data => {
        this.movie = data
        console.log(data)
      }
    });
  }
  getSimilar(id: number, type: string): void {
    this.http.getMedias('movie', `${id}/${type}`).subscribe({
      next: data => {
        if(type === 'similar')
          this.similar = data.results.filter(
          (media) => media.poster_path !== null
        );
        else if(type === 'recommendations'){
          this.recommendations = data.results.filter(
          (media) => media.poster_path !== null);
            console.log(this.recommendations)
        }
      }
    })
  }
}
