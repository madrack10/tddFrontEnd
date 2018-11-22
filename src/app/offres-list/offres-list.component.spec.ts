import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresListComponent } from './offres-list.component';

describe('OffresListComponent', () => {
  let component: OffresListComponent;
  let fixture: ComponentFixture<OffresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
