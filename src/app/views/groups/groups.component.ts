import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderDetailsGroupComponent } from '../../components/header-details-group/header-details-group.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule, 
    MatSlideToggleModule, 
    MatButtonModule, 
    HeaderDetailsGroupComponent,
    BannerComponent
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

}
