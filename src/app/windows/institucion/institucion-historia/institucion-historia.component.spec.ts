import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionHistoriaComponent } from './institucion-historia.component';

describe('InstitucionHistoriaComponent', () => {
  let component: InstitucionHistoriaComponent;
  let fixture: ComponentFixture<InstitucionHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionHistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
