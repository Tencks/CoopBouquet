import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosProductosQuimicosComponent } from './servicios-productos-quimicos.component';

describe('ServiciosProductosQuimicosComponent', () => {
  let component: ServiciosProductosQuimicosComponent;
  let fixture: ComponentFixture<ServiciosProductosQuimicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosProductosQuimicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosProductosQuimicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
