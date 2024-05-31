import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header-details-group',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './header-details-group.component.html',
  styleUrls: ['./header-details-group.component.css']
})
export class HeaderDetailsGroupComponent {
  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }
}
