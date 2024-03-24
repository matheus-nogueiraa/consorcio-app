import { Component } from '@angular/core';
import { HeaderDetailsGroupComponent } from "../components/header-details-group/header-details-group.component";
import { BannerDetailsGroupsComponent } from "../components/banner-details-groups/banner-details-groups.component";
import { FormDetailsGroupsComponent } from "../components/form-details-groups/form-details-groups.component";

@Component({
    selector: 'app-screen-details-groups',
    standalone: true,
    templateUrl: './screen-details-groups.component.html',
    styleUrl: './screen-details-groups.component.css',
    imports: [HeaderDetailsGroupComponent, BannerDetailsGroupsComponent, FormDetailsGroupsComponent]
})
export class ScreenDetailsGroupsComponent {

}
