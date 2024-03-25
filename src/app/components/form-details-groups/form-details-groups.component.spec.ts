import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailsGroupsComponent } from './form-details-groups.component';

describe('FormDetailsGroupsComponent', () => {
  let component: FormDetailsGroupsComponent;
  let fixture: ComponentFixture<FormDetailsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDetailsGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDetailsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
