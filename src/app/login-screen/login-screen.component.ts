import { Component } from '@angular/core';
import { FormLoginComponent } from "../components/form-login/form-login.component";
import { BannerLoginComponent } from "../components/banner-login/banner-login.component";
import { VisibilityService } from '../services/visibility.service';

@Component({
    selector: 'app-login-screen',
    standalone: true,
    templateUrl: './login-screen.component.html',
    styleUrl: './login-screen.component.css',
    imports: [FormLoginComponent, BannerLoginComponent]
})

export class LoginScreenComponent {
  constructor(private visibilityService: VisibilityService) {
    this.visibilityService.setShowComponent(false);
  }
}
