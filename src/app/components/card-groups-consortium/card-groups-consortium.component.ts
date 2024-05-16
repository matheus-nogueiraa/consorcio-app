import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-groups-consortium',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './card-groups-consortium.component.html',
  styleUrl: './card-groups-consortium.component.css'
})
export class CardGroupsConsortiumComponent {
  @Input() title?: string;
  @Input() totalCreditos?: string;
  @Input() valorParcelas?: string;
  @Input() totalParcelas?: string;
  @Input() max_price?: string;
  get backgroundColor(): string {
    const price = Number(this.max_price);
    if (price <= 500) {
      return '#61787b';
    } else if (price <= 1000) {
      return '#61787b';
    } else if (price <= 5000) {
      return '#bf5c45';
    } else if (price <= 10000) {
      return '#2b5278';
    } else {
      return '#defaultColor'; // substitua 'defaultColor' pela cor que você deseja usar como padrão
    }
  }
}
