import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-historic-payments',
  standalone: true,
  imports: [MatButtonModule,],
  templateUrl: './historic-payments.component.html',
  styleUrl: './historic-payments.component.css'
})
export class HistoricPaymentsComponent {

}
