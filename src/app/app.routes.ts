import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScreenDetailsGroupsComponent } from './screen-details-groups/screen-details-groups.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'detailsgroups', component: ScreenDetailsGroupsComponent},
  ];

export class AppRoutingModule { }
