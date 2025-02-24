import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBaseComponent } from './servicios-base.component';

describe('ServiciosBaseComponent', () => {
  let component: ServiciosBaseComponent;
  let fixture: ComponentFixture<ServiciosBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
