import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionConsejoComponent } from './institucion-consejo.component';

describe('InstitucionConsejoComponent', () => {
  let component: InstitucionConsejoComponent;
  let fixture: ComponentFixture<InstitucionConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionConsejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
