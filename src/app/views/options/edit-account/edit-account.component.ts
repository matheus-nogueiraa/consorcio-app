import { Component } from '@angular/core';
import { VisibilityService } from '../../../services/visibility.service';
import { Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderMyGroupsComponent } from "../../../components/header-my-groups/header-my-groups.component";
import { HeaderAccountProfileComponent } from "../../../components/header-account-profile/header-account-profile.component";

@Component({
    selector: 'app-edit-account',
    standalone: true,
    templateUrl: './edit-account.component.html',
    styleUrl: './edit-account.component.css',
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderMyGroupsComponent, HeaderAccountProfileComponent]
})
export class EditAccountComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';


  constructor(private visibilityService: VisibilityService) {
    this.visibilityService.setShowComponent(true);
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
value = 'fulano@mail.com';

}
