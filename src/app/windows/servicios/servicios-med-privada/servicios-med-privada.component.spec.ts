import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosMedPrivadaComponent } from './servicios-med-privada.component';

describe('ServiciosMedPrivadaComponent', () => {
  let component: ServiciosMedPrivadaComponent;
  let fixture: ComponentFixture<ServiciosMedPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosMedPrivadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosMedPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
