import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MediaIntroComponent } from './components/media-intro/media-intro.component';
import { MediaInsetInfoComponent } from './components/media-inset-info/media-inset-info.component';
import { MediaIndexComponent } from './components/media-index/media-index.component';
import { MediaOutsetInfoComponent } from './components/media-outset-info/media-outset-info.component';
import { MediaPeopleComponent } from './components/media-people/media-people.component';

const components = [
  InputTextComponent,
  MediaIntroComponent,
  MediaInsetInfoComponent,
  MediaIndexComponent,
  MediaOutsetInfoComponent,
  MediaPeopleComponent
]

@NgModule({
  declarations: [components],
  imports: [
    FormsModule,
    RouterModule,
    CarouselModule,
    TranslateModule,
    NgOptimizedImage
  ],
  exports: [
    components,
    CommonModule,
    RouterModule,
    TranslateModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
