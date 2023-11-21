import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { MediaInsetInfoComponent } from './components/media-inset-info/media-inset-info.component';
import { MediaOutsetInfoComponent } from './components/media-outset-info/media-outset-info.component';
import { MediaPopularComponent } from './components/media-popular/media-popular.component';
import { MediaPeopleComponent } from './components/media-people/media-people.component';
import { RouterModule } from '@angular/router';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { MediaIntroComponent } from './components/media-intro/media-intro.component';

@NgModule({
  declarations: [
    InputTextComponent,
    MediaIntroComponent,
    MediaPeopleComponent,
    MediaPopularComponent,
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    CarouselModule,
    TranslateModule,
    NgOptimizedImage
  ],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgOptimizedImage,
    InputTextComponent,
    MediaIntroComponent,
    MediaPeopleComponent,
    MediaPopularComponent,
    MediaInsetInfoComponent,
    MediaOutsetInfoComponent
  ]
})
export class SharedModule { }
