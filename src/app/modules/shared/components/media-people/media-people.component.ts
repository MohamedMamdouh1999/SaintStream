import { Component, Input } from '@angular/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';
import { IPerson } from '../../interfaces/iperson';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-media-people',
  templateUrl: './media-people.component.html',
  styleUrl: './media-people.component.scss'
})
export class MediaPeopleComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3.5, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2.5, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1.3, numScroll: 1 }
    ];
  }
  isRtl: boolean = false;
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) title!: string;
  @Input({required: true}) people!: IPerson[];
}
