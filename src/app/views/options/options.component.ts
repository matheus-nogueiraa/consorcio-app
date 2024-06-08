import { Component } from '@angular/core';
import { HeaderMyGroupsComponent } from "../../components/header-my-groups/header-my-groups.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { CardComponent } from "../../components/card/card.component";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { User } from '../../../models/User/user.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-options',
    standalone: true,
    templateUrl: './options.component.html',
    styleUrl: './options.component.css',
    imports: [HeaderMyGroupsComponent, BannerComponent, CardComponent, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatTooltipModule, MatButtonModule, RouterLink, RouterLinkActive, CommonModule],
})
export class OptionsComponent {
  hide = true;

  //dados: User[] = [];
  dados$ = new Observable<User[]>();
  
  toggleHide() {
    this.hide = !this.hide;
  }
  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }

  constructor(private ApiService: ApiService) {
    this.obterDadosUsuario();
  }

  obterDadosUsuario() {
    //this.ApiService.getUsers()
    //.subscribe(dados => this.dados = dados)
    this.dados$ = this.ApiService.getUsers();
  }

  formatPhoneNumber(phone: string): string {
    const match = phone.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }
    return phone;
  }
}
