import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionBaseComponent } from './institucion-base.component';

describe('InstitucionBaseComponent', () => {
  let component: InstitucionBaseComponent;
  let fixture: ComponentFixture<InstitucionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
