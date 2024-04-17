import { Component } from '@angular/core';
import { VisibilityService } from '../../services/visibility.service';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-register-screen',
  standalone: true,
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css',
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
})
export class RegisterScreenComponent {
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
    this.email.statusChanges
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

  onStepChange(step: number) {
    if (step === 0) {
      this.firstStepCompleted = true;
    } else if (step === 1) {
      this.secondStepCompleted = true;
    }
  }
}
