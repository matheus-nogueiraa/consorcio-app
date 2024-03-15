import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  ];

export class AppRoutingModule { }
