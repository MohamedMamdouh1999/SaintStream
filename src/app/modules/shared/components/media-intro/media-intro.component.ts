import { Component, Input } from '@angular/core';
import { IMedia } from '../../interfaces/imedia';
import { IGenre } from '../../interfaces/igenre';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';

@Component({
  selector: 'app-media-intro',
  templateUrl: './media-intro.component.html',
  styleUrl: './media-intro.component.scss'
})
export class MediaIntroComponent {
  constructor() {
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
      { breakpoint: '991px', numVisible: 1, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) medias!: IMedia[];
  @Input({required: true}) genres!: IGenre[];
}
