import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
}
