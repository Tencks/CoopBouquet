import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTurismoComponent } from './servicios-turismo.component';

describe('ServiciosTurismoComponent', () => {
  let component: ServiciosTurismoComponent;
  let fixture: ComponentFixture<ServiciosTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosTurismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
