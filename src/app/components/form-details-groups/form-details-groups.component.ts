import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-form-details-groups',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,MatSlideToggleModule,MatButtonModule],
  templateUrl: './form-details-groups.component.html',
  styleUrl: './form-details-groups.component.css'
})
export class FormDetailsGroupsComponent  {
  nomeGrupo: string = " ";
  valorParcelas: number = 0;
  valorCreditos: number = 0;
  quantidadeParticipantes: number = 0;
  grupoFechado: boolean = false;

  criarGrupo() {
    // Lógica para enviar os dados do formulário
    console.log('Dados do grupo enviados:', {
      nomeGrupo: this.nomeGrupo,
      valorParcelas: this.valorParcelas,
      valorCreditos: this.valorCreditos,
      quantidadeParticipantes: this.quantidadeParticipantes,
      grupoFechado: this.grupoFechado
    });
  }
}
