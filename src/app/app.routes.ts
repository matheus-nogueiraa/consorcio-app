import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScreenDetailsGroupsComponent } from './screen-details-groups/screen-details-groups.component';
import { BannerDetailsGroupsComponent } from './components/banner-details-groups/banner-details-groups.component';
import { FormDetailsGroupsComponent } from './components/form-details-groups/form-details-groups.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'detailsgroups', component: ScreenDetailsGroupsComponent},
  { path: 'bannerdetailsgroups', component: BannerDetailsGroupsComponent},
  { path: 'formdetailsgroups', component: FormDetailsGroupsComponent},
  { path: 'register', component: RegisterScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  ];

export class AppRoutingModule { }
