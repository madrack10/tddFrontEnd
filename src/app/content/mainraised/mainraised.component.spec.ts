import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainraisedComponent } from './mainraised.component';

describe('MainraisedComponent', () => {
  let component: MainraisedComponent;
  let fixture: ComponentFixture<MainraisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainraisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainraisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
