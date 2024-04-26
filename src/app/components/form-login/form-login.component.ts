import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { state } from '@angular/animations';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class FormLoginComponent {

  signupUsers: any[] = [];
  signupObj: any = {
    email: "",
    password: "",
    name: "",
    cpf: "",
    phone: "",
    city: "",
    state: "",
    cep: "",
    complement: "",
    address: "",
  };
  loginObj: any = {
    email: "",
    password: "",
  };

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';


  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Preencha este campo!';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Insira um e-mail válido';
    } else {
      this.errorMessage = '';
    }
}


}
