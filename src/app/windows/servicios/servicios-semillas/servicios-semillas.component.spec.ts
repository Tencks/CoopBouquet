import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSemillasComponent } from './servicios-semillas.component';

describe('ServiciosSemillasComponent', () => {
  let component: ServiciosSemillasComponent;
  let fixture: ComponentFixture<ServiciosSemillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosSemillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosSemillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
