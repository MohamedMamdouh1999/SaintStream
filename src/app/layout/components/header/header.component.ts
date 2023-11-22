import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isBottom!: boolean;
  isShowNav: boolean = false;
  toggleNavBar() {
    if(window.innerWidth < 991)
      this.isShowNav = !this.isShowNav;
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    (window.scrollY > (window.innerHeight / 5)) ? this.isBottom = true : this.isBottom = false
  }
}
