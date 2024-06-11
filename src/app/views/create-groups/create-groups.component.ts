import { Component, OnInit } from '@angular/core';
import { HeaderDetailsGroupComponent } from "../../components/header-details-group/header-details-group.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable,  } from 'rxjs';
import { Group } from '../../../models/Group/group.model';
import moment from 'moment';

@Component({
  selector: 'app-create-groups',
  standalone: true,
  templateUrl: './create-groups.component.html',
  styleUrl: './create-groups.component.css',
  imports: [HeaderDetailsGroupComponent, MatInputModule, MatFormFieldModule,
    MatSlideToggleModule,MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive,
  CommonModule, FormsModule, ReactiveFormsModule ]
})
export class CreateGroupsComponent implements OnInit {
  
  
  grupo$ = new Observable<Group[]>();

  groupForm: FormGroup ;
  
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.groupForm = this.fb.group({
      nomeGrupo: ['', Validators.required],
      valorParcelas: [0, [Validators.required, Validators.min(1)]],
      valorCreditos: [0, [Validators.required, Validators.min(1)]],
      quantidadeParticipantes: [0, [Validators.required, Validators.min(1)]],
      grupoFechado: [false],
      idUser: [0] // Campo para o ID do usuário
    });
  }
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

  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }

  
}
