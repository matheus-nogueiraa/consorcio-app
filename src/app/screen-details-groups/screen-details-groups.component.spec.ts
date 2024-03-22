import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDetailsGroupsComponent } from './screen-details-groups.component';

describe('ScreenDetailsGroupsComponent', () => {
  let component: ScreenDetailsGroupsComponent;
  let fixture: ComponentFixture<ScreenDetailsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenDetailsGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenDetailsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
