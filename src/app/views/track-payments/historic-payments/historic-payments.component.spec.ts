import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricPaymentsComponent } from './historic-payments.component';

describe('HistoricPaymentsComponent', () => {
  let component: HistoricPaymentsComponent;
  let fixture: ComponentFixture<HistoricPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
