import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translate: TranslateService) {
    this.currentLanguage = localStorage.getItem("currentLanguage") || "ar";
    this.translate.use(this.currentLanguage)
    this.translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
  }
  isRtl: boolean = false;
  currentLanguage: string;
  changeCurrentLanguage(language: string){
    this.translate.use(language)
    localStorage.setItem("currentLanguage", language)
  }
  getYear(): number {
    return new Date().getFullYear()
  }
}
