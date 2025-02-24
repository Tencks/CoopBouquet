import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSegurosComponent } from './servicios-seguros.component';

describe('ServiciosSegurosComponent', () => {
  let component: ServiciosSegurosComponent;
  let fixture: ComponentFixture<ServiciosSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosSegurosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
