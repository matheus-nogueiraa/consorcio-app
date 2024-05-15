import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-groups-consortium',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './card-groups-consortium.component.html',
  styleUrl: './card-groups-consortium.component.css'
})
export class CardGroupsConsortiumComponent {
  @Input() title?: string;
  @Input() totalCreditos?: string;
  @Input() valorParcelas?: string;
  @Input() totalParcelas?: string;
  @Input() backgroundColor?: string;
  @Input() max_price?: string;
}
