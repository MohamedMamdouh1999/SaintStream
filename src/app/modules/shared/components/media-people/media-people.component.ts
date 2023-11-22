import { Component, Input } from '@angular/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';
import { IMedia } from '../../interfaces/imedia';

@Component({
  selector: 'app-media-people',
  templateUrl: './media-people.component.html',
  styleUrl: './media-people.component.scss'
})
export class MediaPeopleComponent {
  constructor() {
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3.5, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2.5, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1.3, numScroll: 1 }
    ];
  }
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) title!: string;
  @Input({required: true}) people!: IMedia[];
}
