import { Component, OnInit } from '@angular/core';
import { HeaderAccountProfileComponent } from "../../../components/header-account-profile/header-account-profile.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderMyGroupsComponent } from "../../../components/header-my-groups/header-my-groups.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../../../models/User/user.model';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormActionService } from "../../../services/formAction.service";

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    imports: [MatFormFieldModule, HeaderMyGroupsComponent, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderMyGroupsComponent, CommonModule, FormsModule, HeaderAccountProfileComponent]
})
export class EditProfileComponent implements OnInit{

  constructor(private formActionService: FormActionService, private ApiService: ApiService) {
    this.obterDadosUsuario();
  }

  ngOnInit(): void {
    this.formActionService.formAction$.subscribe(() => {
      this.updateUser();
    });
  }

  dados$ = new Observable<User[]>();

  obterDadosUsuario() {
    this.dados$ = this.ApiService.getUsers();
  }

  formatPhoneNumber(phone: string): string {
    const match = phone.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }
    return phone;
  }

  //form
  name = '';
  phone = '';
  address = '';
  complement = '';
  state = '';
  city = '';

  updateUser() {
    if (!this.name || !this.phone || !this.address || !this.complement || !this.state || !this.city) {
      return;
    }

    const userId = 2;

    this.ApiService.updateUser(userId, {
      name: this.name,
      phone: this.phone,
      address: this.address,
      complement: this.complement,
      state: this.state,
      city: this.city
    })
    .subscribe(
      () => {
        this.obterDadosUsuario();
      }
    );
  }
  setDados(dado: User) {
    this.name = dado.name;
    this.phone = dado.phone;
    this.address = dado.address;
    this.complement = dado.complement;
    this.state = dado.state;
    this.city = dado.city;
  }
}
