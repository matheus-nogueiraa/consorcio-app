import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderDetailsGroupComponent } from '../../components/header-details-group/header-details-group.component';
import { CardComponent } from '../../components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { NotPaidComponent } from './not-paid/not-paid.component';
import { PaidComponent } from "./paid/paid.component";

@Component({
    selector: 'app-track-payments',
    standalone: true,
    templateUrl: './track-payments.component.html',
    styleUrl: './track-payments.component.css',
    imports: [BannerComponent, HeaderDetailsGroupComponent, CardComponent, MatButtonModule, NotPaidComponent, PaidComponent]
})
export class TrackPaymentsComponent {

}
