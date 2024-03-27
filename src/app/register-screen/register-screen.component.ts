import { Component } from '@angular/core';
import { BannerRegisterComponent } from "../components/banner-register/banner-register.component";
import { StepperErrorsExample } from "../components/form-register/form-register.component";
import { VisibilityService } from '../services/visibility.service';
@Component({
    selector: 'app-register-screen',
    standalone: true,
    templateUrl: './register-screen.component.html',
    styleUrl: './register-screen.component.css',
    imports: [BannerRegisterComponent, StepperErrorsExample]
})
export class RegisterScreenComponent {
  constructor(private visibilityService: VisibilityService) {
    this.visibilityService.setShowComponent(false);
  }
}
