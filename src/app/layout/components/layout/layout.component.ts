import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BodyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
  }
  isRtl: boolean = false;
}
