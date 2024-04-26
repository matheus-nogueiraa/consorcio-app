import { Component } from '@angular/core';
import { BannerDetailsGroupsComponent } from '../components/banner-details-groups/banner-details-groups.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { HeaderDetailsGroupComponent } from '../components/header-details-group/header-details-group.component';



@Component({
  selector: 'app-detalhes-do-grupo',
  standalone: true,
  imports: [BannerDetailsGroupsComponent, MatInputModule, MatFormFieldModule, MatSlideToggleModule, MatButtonModule, HeaderDetailsGroupComponent],
  templateUrl: './detalhes-do-grupo.component.html',
  styleUrl: './detalhes-do-grupo.component.css'
})
export class DetalhesDoGrupoComponent {

}
