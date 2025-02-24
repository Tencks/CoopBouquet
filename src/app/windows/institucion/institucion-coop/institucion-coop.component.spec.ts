import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionCoopComponent } from './institucion-coop.component';

describe('InstitucionCoopComponent', () => {
  let component: InstitucionCoopComponent;
  let fixture: ComponentFixture<InstitucionCoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionCoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
