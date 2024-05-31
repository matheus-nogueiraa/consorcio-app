import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-account-profile',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header-account-profile.component.html',
  styleUrls: ['./header-account-profile.component.css']
})
export class HeaderAccountProfileComponent {
 
}
