import { Component } from '@angular/core';
import { HeaderAccountProfileComponent } from "../../components/header-account-profile/header-account-profile.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderMyGroupsComponent } from "../../components/header-my-groups/header-my-groups.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    imports: [HeaderAccountProfileComponent, MatFormFieldModule, HeaderMyGroupsComponent, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderMyGroupsComponent, HeaderAccountProfileComponent]
})
export class EditProfileComponent {

}
