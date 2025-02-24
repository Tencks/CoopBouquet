import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBalanceadosComponent } from './servicios-balanceados.component';

describe('ServiciosBalanceadosComponent', () => {
  let component: ServiciosBalanceadosComponent;
  let fixture: ComponentFixture<ServiciosBalanceadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosBalanceadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosBalanceadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
