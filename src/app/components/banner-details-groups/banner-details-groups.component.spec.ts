import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDetailsGroupsComponent } from './banner-details-groups.component';

describe('BannerDetailsGroupsComponent', () => {
  let component: BannerDetailsGroupsComponent;
  let fixture: ComponentFixture<BannerDetailsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDetailsGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerDetailsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
