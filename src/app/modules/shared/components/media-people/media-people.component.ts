import { Component, Input } from '@angular/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';
import { IPerson } from '../../interfaces/iperson';

@Component({
  selector: 'app-media-people',
  templateUrl: './media-people.component.html',
  styleUrl: './media-people.component.scss'
})
export class MediaPeopleComponent {
  constructor() {
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 2.7, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) people!: IPerson[];
}
