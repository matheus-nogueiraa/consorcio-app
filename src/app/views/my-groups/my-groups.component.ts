import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardGroupsConsortiumComponent } from '../../components/card-groups-consortium/card-groups-consortium.component';
import { HeaderDetailsGroupComponent } from '../../components/header-details-group/header-details-group.component';


@Component({
  selector: 'app-my-groups',
  standalone: true,
  imports: [BannerComponent, CardGroupsConsortiumComponent, HeaderDetailsGroupComponent],
  templateUrl: './my-groups.component.html',
  styleUrl: './my-groups.component.css'
})
export class MyGroupsComponent {

}
