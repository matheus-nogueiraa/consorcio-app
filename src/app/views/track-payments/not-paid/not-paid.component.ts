import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-not-paid',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule],
  templateUrl: './not-paid.component.html',
  styleUrl: './not-paid.component.css'
})
export class NotPaidComponent {

}
