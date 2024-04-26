import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-form-details-groups',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,MatSlideToggleModule,MatButtonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './form-details-groups.component.html',
  styleUrl: './form-details-groups.component.css'
})


export class FormDetailsGroupsComponent implements OnInit, OnDestroy {

  groupsCreated: any[] = [];
  form: FormGroup = new FormGroup({});
  nameGroupControl = new FormControl('');
  parcelValueControl = new FormControl('');
  creditTotalControl = new FormControl('');
  totalParticipantsControl = new FormControl('');
  privateGroupControl = new FormControl('');

  errorMessage = '';

private unsubscribe$ = new Subject<void>();

constructor(private _formBuilder: FormBuilder){}

ngOnInit(){
  this.form = this._formBuilder.group({
    nameGroup: this.nameGroupControl,
    parcelValue: this.parcelValueControl,
    creditTotal: this.creditTotalControl,
    totalParticipants: this.totalParticipantsControl,
    privateGroup: this.privateGroupControl,
  })

  this.setupGroupListener
}

ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}

setupGroupListener(){
  this.nameGroupControl.statusChanges.pipe(
    takeUntil(this.unsubscribe$)
  ).subscribe(() => this.updateErrorMessage());
}

updateErrorMessage() {
  this.errorMessage = '';
}

onCreateGroup(){
  const createGroupsData = {
    nameGroup: this.nameGroupControl.value,
    parcelValue: this.parcelValueControl.value,
    creditTotal: this.creditTotalControl.value,
    totalParticipants: this.totalParticipantsControl.value,
    privateGroup: Boolean(this.privateGroupControl.value),
  }

  this.groupsCreated.push(createGroupsData);
  localStorage.setItem("groupsCreated", JSON.stringify(this.groupsCreated))
}
}
