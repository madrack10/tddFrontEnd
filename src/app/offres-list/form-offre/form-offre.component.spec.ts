import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOffreComponent } from './form-offre.component';

describe('FormOffreComponent', () => {
  let component: FormOffreComponent;
  let fixture: ComponentFixture<FormOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
