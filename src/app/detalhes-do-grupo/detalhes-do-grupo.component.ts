import { Component } from '@angular/core';
import { BannerDetailsGroupsComponent } from '../components/banner-details-groups/banner-details-groups.component';
import { VisibilityService } from '../services/visibility.service';

@Component({
  selector: 'app-detalhes-do-grupo',
  standalone: true,
  imports: [BannerDetailsGroupsComponent],
  templateUrl: './detalhes-do-grupo.component.html',
  styleUrl: './detalhes-do-grupo.component.css'
})
export class DetalhesDoGrupoComponent {
  constructor(private visibilityService: VisibilityService) {
    this.visibilityService.setShowComponent(false);
  }
}
