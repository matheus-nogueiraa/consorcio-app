import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GroupsComponent } from './views/groups/groups.component';
import { RegisterScreenComponent } from './views/register-screen/register-screen.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { DetalhesDoGrupoComponent } from './detalhes-do-grupo/detalhes-do-grupo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'register', component: RegisterScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'detalhesdogrupo', component: DetalhesDoGrupoComponent},
  
  ];

export class AppRoutingModule { }
