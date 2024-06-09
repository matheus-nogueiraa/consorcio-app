import { AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateGroupsComponent } from './views/create-groups/create-groups.component';
import { HeaderDetailsGroupComponent } from "./components/header-details-group/header-details-group.component";
import { CommonModule } from '@angular/common';
import { VisibilityService } from './services/visibility.service';
import {} from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CreateGroupsComponent,
       HeaderDetailsGroupComponent, CommonModule, RouterLink, RouterLinkActive, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
    providers: [ApiService, VisibilityService]
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'Seu Consórcio';
  users: any[] = [];

  constructor(
    private visibilityService: VisibilityService,
    private apiService: ApiService, // Certifique-se que a injeção está correta
    private cdr: ChangeDetectorRef
  ) {
    console.log('TO AQUI', environment.api);
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); // Marcando mudanças para evitar ExpressionChangedAfterItHasBeenCheckedError
  }

  public getShowComponent(): boolean {
    return this.visibilityService.getShowComponent();
  }
}
