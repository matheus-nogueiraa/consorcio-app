import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ModalUploadComponent } from '../../../components/modal-upload/modal-upload.component';
import { MatDialog} from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { UserPayments } from '../../../../models/Payment/user-payments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-paid',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './not-paid.component.html',
  styleUrl: './not-paid.component.css'
})
export class NotPaidComponent {
  @Input() boletos: UserPayments[] = [];

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService
  ){
    this.obterBoletosNaoPagos()
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalUploadComponent, {
      width: '374px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  obterBoletosNaoPagos() {
    this.apiService.getPayments()
      .subscribe(boletos => {
        this.boletos = boletos.filter(boleto => !boleto.isPaid);
      });
  }

  downloadBoleto() {
    const url = '../../../../assets/Modelo-de-Boleto.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Modelo-de-Boleto.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
