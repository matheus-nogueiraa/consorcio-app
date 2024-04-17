import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { GroupsComponent } from './views/groups/groups.component';
import { HeaderDetailsGroupComponent } from './components/header-details-group/header-details-group.component';
import { CommonModule } from '@angular/common';
import { VisibilityService } from './services/visibility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    GroupsComponent,
    HeaderDetailsGroupComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'Seu Consórcio';

  constructor(private visibilityService: VisibilityService) {}

  public getShowComponent(): boolean {
    return this.visibilityService.getShowComponent();
  }
}
