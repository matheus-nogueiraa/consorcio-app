import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ModalUploadComponent } from '../../../components/modal-upload/modal-upload.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-not-paid',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule],
  templateUrl: './not-paid.component.html',
  styleUrl: './not-paid.component.css'
})
export class NotPaidComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalUploadComponent, {
      width: '374px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
