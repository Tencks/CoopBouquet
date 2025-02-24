import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionUbicacionComponent } from './institucion-ubicacion.component';

describe('InstitucionUbicacionComponent', () => {
  let component: InstitucionUbicacionComponent;
  let fixture: ComponentFixture<InstitucionUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionUbicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
