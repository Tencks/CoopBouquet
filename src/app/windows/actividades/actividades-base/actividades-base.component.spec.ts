import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesBaseComponent } from './actividades-base.component';

describe('ActividadesBaseComponent', () => {
  let component: ActividadesBaseComponent;
  let fixture: ComponentFixture<ActividadesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
