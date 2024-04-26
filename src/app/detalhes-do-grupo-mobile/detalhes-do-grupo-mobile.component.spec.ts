import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDoGrupoMobileComponent } from './detalhes-do-grupo-mobile.component';

describe('DetalhesDoGrupoMobileComponent', () => {
  let component: DetalhesDoGrupoMobileComponent;
  let fixture: ComponentFixture<DetalhesDoGrupoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDoGrupoMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesDoGrupoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
