import { Component } from '@angular/core';
import { HeaderDetailsGroupComponent } from "../../components/header-details-group/header-details-group.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CreateGroup } from '../../../models/Create-Group/createGroup.model';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-groups',
  standalone: true,
  templateUrl: './create-groups.component.html',
  styleUrl: './create-groups.component.css',
  imports: [HeaderDetailsGroupComponent, MatInputModule, MatFormFieldModule,
    MatSlideToggleModule,MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, RouterLinkActive, ]
})
export class CreateGroupsComponent {

  grupoForm: FormGroup;
  apiService: any;

  constructor() {
    this.grupoForm = new FormGroup({
      nomeGrupo: new FormControl(''),
      valorParcelas: new FormControl(0),
      valorCreditos: new FormControl(0),
      quantidadeParticipantes: new FormControl(0),
      grupoFechado: new FormControl(false)
    });
  }

  criarGrupo() {
    console.log(this.grupoForm.value);
    this.apiService.postGroup(this.grupoForm).subscribe(() => {
      console.log('Grupo criado com sucesso!');
    }, (error: any) => {
      console.error('Erro ao criar grupo:', error);
    });
  }


    /*
    this.apiService.postGroup(groupData).subscribe((response) => {
      console.log('Grupo criado com sucesso!');
    }, (error) => {
      console.error('Erro ao criar grupo:', error);
    });*/
  

  openExternalLink(): void {
    window.open('https://wa.me/5562981687434', '_blank');
  }

  dados: CreateGroup[] = []
}
