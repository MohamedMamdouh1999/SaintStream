import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  getYear(): number {
    return new Date().getFullYear()
  }
}
