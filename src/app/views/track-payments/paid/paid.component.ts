import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ApiService } from '../../../services/api.service';
import { UserPayments } from '../../../../models/Payment/user-payments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paid',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './paid.component.html',
  styleUrl: './paid.component.css'
})
export class PaidComponent {
  @Input() boletos: UserPayments[] = [];

  constructor(
    private apiService: ApiService
  ){
    this.obterBoletosPagos()
  }

  obterBoletosPagos() {
    this.apiService.getPayments()
      .subscribe(boletos => {
        this.boletos = boletos.filter(boleto => boleto.isPaid);
      });
  }
}
