import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    this.currentLanguage = localStorage.getItem("currentLanguage") || "ar";
    this.translate.use(this.currentLanguage)
    this.translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
  }
  isRtl: boolean = false;
  currentLanguage: string;
  isShowNav: boolean = false;
  toggleNavBar() {
    if(window.innerWidth < 991)
      this.isShowNav = !this.isShowNav;
  }
  changeCurrentLanguage(language: string){
    this.translate.use(language)
    localStorage.setItem("currentLanguage", language)
  }
}
