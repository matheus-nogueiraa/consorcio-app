import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScreenDetailsGroupsComponent } from './screen-details-groups/screen-details-groups.component';
import { BannerDetailsGroupsComponent } from "./components/banner-details-groups/banner-details-groups.component";
import { FormDetailsGroupsComponent } from "./components/form-details-groups/form-details-groups.component";
import { HeaderDetailsGroupComponent } from "./header-details-group/header-details-group.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, GroupsComponent, ScreenDetailsGroupsComponent, BannerDetailsGroupsComponent, FormDetailsGroupsComponent, HeaderDetailsGroupComponent]
})
export class AppComponent {
  title = 'Seu Consórcio';
}
