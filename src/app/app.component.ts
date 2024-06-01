import { Component} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateGroupsComponent } from './views/create-groups/create-groups.component';
import { HeaderDetailsGroupComponent } from "./components/header-details-group/header-details-group.component";
import { CommonModule } from '@angular/common';
import { VisibilityService } from './services/visibility.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CreateGroupsComponent,
       HeaderDetailsGroupComponent, CommonModule, RouterLink, RouterLinkActive, HttpClientModule]
})
export class AppComponent {

    title = 'Seu Consórcio';

    constructor(private visibilityService: VisibilityService) {}

    public getShowComponent(): boolean {
      return this.visibilityService.getShowComponent();
    }
  }

