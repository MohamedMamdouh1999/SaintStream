import { Component, Input } from '@angular/core';
import { IMedia } from '../../../shared/interfaces/imedia';
import { TranslateService } from '@ngx-translate/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';

@Component({
  selector: 'app-media-inset-info',
  templateUrl: './media-inset-info.component.html',
  styleUrl: './media-inset-info.component.scss'
})
export class MediaInsetInfoComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 4.4, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2.3, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1.2, numScroll: 1 }
    ];
  }
  isRtl: boolean = false;
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) title!: string;
  @Input({required: true}) medias!: IMedia[];
}
