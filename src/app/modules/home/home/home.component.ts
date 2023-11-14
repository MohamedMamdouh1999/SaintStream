import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaInsetInfoComponent } from '../../shared/components/media-inset-info/media-inset-info.component';
import { MediaService } from '../../shared/services/media.service';
import { IMedia } from '../../shared/interfaces/imedia';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MediaInsetInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
  getMedia(media: string, type: string): void {
    if(type === 'upcoming'){
      this.http.getMedia(media, type).subscribe({
        next: data => this.releaseMovies = data.results
      })
    } else if(type === 'popular'){
      this.http.getMedia(media, type).subscribe({
        next: data => this.popularMovies = data.results
      })
    } else if(media === 'movie' && type === 'top_rated'){
      this.http.getMedia(media, type).subscribe({
        next: data => this.movies = data.results
      })
    } else if(media === 'tv' && type === 'top_rated'){
      this.http.getMedia(media, type).subscribe({
        next: data => this.series = data.results
      })
    }
  }
}
