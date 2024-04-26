import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { takeUntil } from 'rxjs/operators';import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: false},
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  signupUsers: any[] = [];
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  hide = true;
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  nameControl = new FormControl('');
  cpfControl = new FormControl('');
  phoneControl = new FormControl('');
  cityControl = new FormControl('');
  stateControl = new FormControl('');
  cepControl = new FormControl('');
  complementControl = new FormControl('');
  addressControl = new FormControl('');

  errorMessage = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

    this.secondFormGroup = this._formBuilder.group({
      name: this.nameControl,
      cpf: this.cpfControl,
      phone: this.phoneControl,
      city: this.cityControl,
      state: this.stateControl,
      cep: this.cepControl,
      complement: this.complementControl,
      address: this.addressControl,
    });

    this.setupEmailListener();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setupEmailListener() {
    this.emailControl.statusChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    this.errorMessage = '';
  }

  onSignUp() {
    // Adicione a lógica para processar o formulário e salvar os dados
    const signUpData = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
      name: this.nameControl.value,
      cpf: this.cpfControl.value,
      phone: this.phoneControl.value,
      city: this.cityControl.value,
      state: this.stateControl.value,
      cep: this.cepControl.value,
      complement: this.complementControl.value,
      address: this.addressControl.value,
    };

    // Adicione a lógica para salvar os dados ou enviá-los para o servidor
    this.signupUsers.push(signUpData);
    localStorage.setItem("signUpUsers", JSON.stringify(this.signupUsers));
  }
}
