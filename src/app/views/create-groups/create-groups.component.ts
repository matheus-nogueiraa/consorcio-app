import { Component } from '@angular/core';
import { HeaderDetailsGroupComponent } from "../../components/header-details-group/header-details-group.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-create-groups',
    standalone: true,
    templateUrl: './create-groups.component.html',
    styleUrl: './create-groups.component.css',
    imports: [HeaderDetailsGroupComponent, MatInputModule, MatFormFieldModule,MatSlideToggleModule,MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive]
})
export class CreateGroupsComponent {
  nomeGrupo: string = "";
  valorParcelas: number = 0;
  valorCreditos: number = 0;
  quantidadeParticipantes: number = 0;
  grupoFechado: boolean = false;

  criarGrupo() {

    console.log('Dados do grupo enviados:', {
      nomeGrupo: this.nomeGrupo,
      valorParcelas: this.valorParcelas,
      valorCreditos: this.valorCreditos,
      quantidadeParticipantes: this.quantidadeParticipantes,
      grupoFechado: this.grupoFechado
    });
  }

  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }
}
