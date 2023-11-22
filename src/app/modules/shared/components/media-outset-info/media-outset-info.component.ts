import { Component, Input } from '@angular/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';
import { IMedia } from '../../interfaces/imedia';
import { IGenre } from '../../interfaces/igenre';

@Component({
  selector: 'app-media-outset-info',
  templateUrl: './media-outset-info.component.html',
  styleUrl: './media-outset-info.component.scss'
})
export class MediaOutsetInfoComponent {
  constructor() {
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2.1, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) title!: string;
  @Input({required: true}) medias!: IMedia[];
  @Input({required: true}) genres!: IGenre[];
}
