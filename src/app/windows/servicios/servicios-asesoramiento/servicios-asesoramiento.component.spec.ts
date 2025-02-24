import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAsesoramientoComponent } from './servicios-asesoramiento.component';

describe('ServiciosAsesoramientoComponent', () => {
  let component: ServiciosAsesoramientoComponent;
  let fixture: ComponentFixture<ServiciosAsesoramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosAsesoramientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosAsesoramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
