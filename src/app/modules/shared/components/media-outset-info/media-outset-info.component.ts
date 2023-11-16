import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';
import { IMedia } from '../../interfaces/imedia';
import { IGenre } from '../../interfaces/igenres';

@Component({
  selector: 'app-media-outset-info',
  templateUrl: './media-outset-info.component.html',
  styleUrl: './media-outset-info.component.scss'
})
export class MediaOutsetInfoComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 2.7, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  isRtl: boolean = false;
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) title!: string;
  @Input({required: true}) medias!: IMedia[];
  @Input({required: true}) genres!: IGenre[];
}
