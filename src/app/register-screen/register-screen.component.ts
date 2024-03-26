import { Component } from '@angular/core';
import { BannerRegisterComponent } from "../components/banner-register/banner-register.component";
import { StepperErrorsExample } from "../form-register/form-register.component";

@Component({
    selector: 'app-register-screen',
    standalone: true,
    templateUrl: './register-screen.component.html',
    styleUrl: './register-screen.component.css',
    imports: [BannerRegisterComponent, StepperErrorsExample]
})
export class RegisterScreenComponent {
  showNavbar = false;
  showFooter = false;
}
