import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardGroupsConsortiumComponent } from '../../components/card-groups-consortium/card-groups-consortium.component';
import { HeaderDetailsGroupComponent } from '../../components/header-details-group/header-details-group.component';
import { HeaderMyGroupsComponent } from "../../components/header-my-groups/header-my-groups.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-my-groups',
    standalone: true,
    templateUrl: './my-groups.component.html',
    styleUrl: './my-groups.component.css',
    imports: [BannerComponent, CardGroupsConsortiumComponent, HeaderDetailsGroupComponent, HeaderMyGroupsComponent
        , CommonModule
    ]
})
export class MyGroupsComponent {
    hide = true;


}
