import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { MediaInsetInfoComponent } from './components/media-inset-info/media-inset-info.component';
import { MediaOutsetInfoComponent } from './components/media-outset-info/media-outset-info.component';
import { MediaPopularComponent } from './components/media-popular/media-popular.component';
import { MediaPeopleComponent } from './components/media-people/media-people.component';

@NgModule({
  declarations: [
    MediaPeopleComponent,
    MediaPopularComponent,
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    NgOptimizedImage
  ],
  exports: [
    MediaPeopleComponent,
    MediaPopularComponent,
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent
  ]
})
export class SharedModule { }
