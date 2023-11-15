import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { IMedia } from '../../../shared/interfaces/imedia';
import { ResponsiveOption } from '../../interfaces/responsive-option';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popular-media',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule, NgOptimizedImage],
  templateUrl: './popular-media.component.html',
  styleUrl: './popular-media.component.scss'
})
export class PopularMediaComponent {
  constructor(private translate: TranslateService) {
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
  responsiveOptions: ResponsiveOption[];
  @Input({required: true}) medias!: IMedia[];
}
