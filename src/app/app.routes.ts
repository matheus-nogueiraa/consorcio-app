import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GroupsComponent } from './views/groups/groups.component';
import { RegisterScreenComponent } from './views/register-screen/register-screen.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { DetalhesDoGrupoComponent } from './views/detalhes-do-grupo/detalhes-do-grupo.component';
import { DetalhesDoGrupoUsuarioComponent } from './detalhes-do-grupo-usuario/detalhes-do-grupo-usuario.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'register', component: RegisterScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'detalhesdogrupo', component: DetalhesDoGrupoComponent},
  { path: 'detalhesdogrupousuario', component: DetalhesDoGrupoUsuarioComponent},
  ];

export class AppRoutingModule { }
