import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMedia } from '../../interfaces/imedia';
import { IResponsiveOption } from '../../interfaces/iresponsive-option';

@Component({
  selector: 'app-media-popular',
  templateUrl: './media-popular.component.html',
  styleUrl: './media-popular.component.scss'
})
export class MediaPopularComponent {
  constructor(private translate: TranslateService){
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 2.4, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2, numScroll: 2 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
  }
  isRtl: boolean = false;
  responsiveOptions: IResponsiveOption[];
  @Input({required: true}) type!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) medias!: IMedia[];
}
