import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCombustiblesComponent } from './servicios-combustibles.component';

describe('ServiciosCombustiblesComponent', () => {
  let component: ServiciosCombustiblesComponent;
  let fixture: ComponentFixture<ServiciosCombustiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosCombustiblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosCombustiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
