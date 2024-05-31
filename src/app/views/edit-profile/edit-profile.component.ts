import { Component } from '@angular/core';
import { HeaderAccountProfileComponent } from "../../components/header-account-profile/header-account-profile.component";
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    imports: [HeaderAccountProfileComponent, MatFormFieldModule]
})
export class EditProfileComponent {

}
