import { Component } from '@angular/core';
import { MediaService } from '../../modules/shared/services/media.service';
import { IMedia } from '../../modules/shared/interfaces/imedia';
import { SharedModule } from '../../modules/shared/shared.module';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
  constructor(private http: MediaService){
    this.getMedia('movie', 'upcoming')
    this.getMedia('movie', 'popular')
    this.getMedia('movie', 'top_rated')
    this.getMedia('tv', 'top_rated')
  }
  releaseMovies!: IMedia[];
  popularMovies!: IMedia[];
  movies!: IMedia[];
  series!: IMedia[];
  getMedia(media: string, type: string, page: number = 2): void {
    if(type === 'upcoming'){
      this.http.getMedia(media, type, page).subscribe({
        next: data => this.releaseMovies = data.results
      })
    } else if(type === 'popular'){
      this.http.getMedia(media, type, page).subscribe({
        next: data => this.popularMovies = data.results
      })
    } else if(media === 'movie' && type === 'top_rated'){
      this.http.getMedia(media, type, page).subscribe({
        next: data => this.movies = data.results
      })
    } else if(media === 'tv' && type === 'top_rated'){
      this.http.getMedia(media, type, page).subscribe({
        next: data => this.series = data.results
      })
    }
  }
}
