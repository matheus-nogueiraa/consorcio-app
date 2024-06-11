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
<<<<<<< HEAD
  ngOnInit(): void {
    const userId = this.apiService.userId;
  }



 obterDadosGrupo() {
  this.grupo$ = this.apiService.getGroup();
}

criarGrupo() {
  if (this.groupForm.valid) {
    const userId = this.apiService.userId;
    const groupData = this.groupForm.value;
    const dataCriacao = moment();

    // A quantidade de parcelas é definida pela quantidade de participantes
    const quantidadeParcelas = groupData.quantidadeParticipantes;

    // Calcule a data final adicionando a quantidade de parcelas (meses) à data de criação
    const dataFinal = dataCriacao.add(quantidadeParcelas, 'months').toDate();
    groupData.dataCriacao = dataCriacao.toDate();
    groupData.dataFinal = dataFinal;
    groupData.duracaoMeses = quantidadeParcelas;

    groupData.name = groupData.nomeGrupo;
    groupData.valorTotal = groupData.valorCreditos;
    groupData.grupoFechado = groupData.grupoFechado; 

    this.apiService.postGroup(userId, groupData).subscribe(
      response => {
        console.log('Grupo criado com sucesso:', response);
      },
      error => {
        console.error('Erro ao criar grupo:', error);
      }
    );
  } else {
    console.log('Formulário inválido', this.groupForm);
  }
}
=======
>>>>>>> 4cf89d54a06e44f76dff378181fb011fe9f2ad86

  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }
}
