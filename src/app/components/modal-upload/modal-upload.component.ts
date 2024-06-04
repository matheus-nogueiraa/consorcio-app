import { Component } from '@angular/core';
import {MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-upload',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './modal-upload.component.html',
  styleUrl: './modal-upload.component.css'
})
export class ModalUploadComponent {
  constructor(public dialogRef: MatDialogRef<ModalUploadComponent>) {

  }
}
