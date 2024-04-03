import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormControl, FormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



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
    MatIconModule
  ],
})
export class FormRegisterComponent {
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    firstStepCompleted = false;
    secondStepCompleted = false;

    hide = true;

    email = new FormControl('', [Validators.required, Validators.email]);

    errorMessage = '';

    constructor(private _formBuilder: FormBuilder) {
      this.setupEmailListener();
    }

    setupEmailListener() {
      this.email.statusChanges.pipe(
        takeUntilDestroyed()
      ).subscribe(() => this.updateErrorMessage());
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

    onStepChange(step: number) {
      if (step === 0) {
        this.firstStepCompleted = true;
      } else if (step === 1) {
        this.secondStepCompleted = true;
      }
    }

}
