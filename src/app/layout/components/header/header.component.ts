import { Component, HostListener } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
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
  isBottom!: boolean;
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
  @HostListener('window:scroll', [])
  onScroll(): void {
    (window.scrollY > (window.innerHeight / 5)) ? this.isBottom = true : this.isBottom = false
  }
}
