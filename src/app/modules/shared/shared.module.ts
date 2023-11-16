import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { MediaInsetInfoComponent } from './components/media-inset-info/media-inset-info.component';
import { MediaOutsetInfoComponent } from './components/media-outset-info/media-outset-info.component';
import { MediaPopularComponent } from './components/media-popular/media-popular.component';

@NgModule({
  declarations: [
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent,
    MediaPopularComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    NgOptimizedImage
  ],
  exports: [
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent,
    MediaPopularComponent
  ]
})
export class SharedModule { }
