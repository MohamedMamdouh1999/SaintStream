import { Component, Input } from '@angular/core';
import { IMedia } from '../../interfaces/imedia';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';

@Component({
  selector: 'app-media-index',
  templateUrl: './media-index.component.html',
  styleUrl: './media-index.component.scss'
})
export class MediaIndexComponent {
  constructor(){
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 2.4, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) type!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) medias!: IMedia[];
}
