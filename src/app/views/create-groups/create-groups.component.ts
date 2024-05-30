import { Component } from '@angular/core';
import { HeaderDetailsGroupComponent } from "../../components/header-details-group/header-details-group.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'

@Component({
    selector: 'app-create-groups',
    standalone: true,
    templateUrl: './create-groups.component.html',
    styleUrl: './create-groups.component.css',
    imports: [HeaderDetailsGroupComponent, MatInputModule, MatFormFieldModule,MatSlideToggleModule,MatButtonModule]
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
}
