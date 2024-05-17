import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderDetailsGroupComponent } from '../../components/header-details-group/header-details-group.component';
import { CardComponent } from '../../components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { HistoricPaymentsComponent } from './historic-payments/historic-payments.component';

@Component({
  selector: 'app-track-payments',
  standalone: true,
  imports: [BannerComponent, HeaderDetailsGroupComponent, CardComponent, MatButtonModule, HistoricPaymentsComponent],
  templateUrl: './track-payments.component.html',
  styleUrl: './track-payments.component.css'
})
export class TrackPaymentsComponent {

}
