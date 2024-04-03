import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScreenDetailsGroupsComponent } from './screen-details-groups/screen-details-groups.component';
import { BannerDetailsGroupsComponent } from "./components/banner-details-groups/banner-details-groups.component";
import { FormDetailsGroupsComponent } from "./components/form-details-groups/form-details-groups.component";
import { HeaderDetailsGroupComponent } from "./components/header-details-group/header-details-group.component";
import { BannerLoginComponent } from "./components/banner-login/banner-login.component";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { BannerRegisterComponent } from "./components/banner-register/banner-register.component";
import { CommonModule } from '@angular/common';
import { VisibilityService } from './services/visibility.service';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, GroupsComponent, ScreenDetailsGroupsComponent, BannerDetailsGroupsComponent, FormDetailsGroupsComponent, HeaderDetailsGroupComponent, BannerLoginComponent, FormLoginComponent, BannerRegisterComponent, FormRegisterComponent, CommonModule, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'Seu Consórcio';

  constructor(private visibilityService: VisibilityService) {}

  public getShowComponent(): boolean {
    return this.visibilityService.getShowComponent();
  }


}
