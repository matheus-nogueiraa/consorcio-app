import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GroupsComponent } from './views/groups/groups.component';
import { RegisterScreenComponent } from './views/register-screen/register-screen.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { DetalhesDoGrupoComponent } from './views/detalhes-do-grupo/detalhes-do-grupo.component';
import { DetalhesDoGrupoUsuarioComponent } from './views/detalhes-do-grupo-usuario/detalhes-do-grupo-usuario.component';
import { ConsortiumDetailsComponent } from './views/consortium-details/consortium-details.component';
import { MyGroupsComponent } from './views/my-groups/my-groups.component';
import { TrackPaymentsComponent } from './views/track-payments/track-payments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-groups', component: GroupsComponent },
  { path: 'register', component: RegisterScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'detalhes-do-grupo', component: DetalhesDoGrupoComponent},
  { path: 'detalhes-do-grupo-usuario', component: DetalhesDoGrupoUsuarioComponent},
  { path: 'consortium-details', component: ConsortiumDetailsComponent },
  { path: 'my-groups', component: MyGroupsComponent },
  { path: 'track-payments', component: TrackPaymentsComponent }
  ];

export class AppRoutingModule { }
