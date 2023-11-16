import { Component } from '@angular/core';
import { MediaService } from '../../modules/shared/services/media.service';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { SharedModule } from '../../modules/shared/shared.module';
import { IGenre } from '../../modules/shared/interfaces/igenres';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private translate: TranslateService, private http: MediaService){
    translate.onLangChange.subscribe({
      next: () => {
        if(this.translate.currentLang === "ar"){
          this.getGenres('movie' ,'ar')
          this.getGenres('tv' ,'ar')
        } else{
          this.getGenres('movie' ,'en')
          this.getGenres('tv' ,'en')
        }
      }
    })
    this.getMedia('movie', 'upcoming')
    this.getMedia('movie', 'popular')
    this.getMedia('movie', 'top_rated')
    this.getMedia('tv', 'top_rated')
  }
  releaseMovies!: IMedia[];
  popularMovies!: IMedia[];
  movieGenres!: IGenre[];
  tvGenres!: IGenre[];
  movies!: IMedia[];
  series!: IMedia[];
  getMedia(media: string, type: string): void {
    this.http.getMedia(media, type).subscribe({
      next: data => {
        if(type === 'upcoming'){
          this.releaseMovies = data.results
        } else if(type === 'popular'){
          this.popularMovies = data.results
        } else if(media === 'movie' && type === 'top_rated'){
          this.movies = data.results
        } else if(media === 'tv' && type === 'top_rated'){
          this.series = data.results
        }
      }
    })
  }
  getGenres(media: string, language: string): void {
    this.http.getGenres(media, language).subscribe({
      next: data => {
        if(media === 'movie'){
          this.movieGenres = data.genres
        } else if(media === 'tv'){
          this.tvGenres = data.genres
        }
      }
    })
  }
}
