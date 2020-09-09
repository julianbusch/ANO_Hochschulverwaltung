import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetenListeComponent } from './fakultaeten-liste.component';

describe('FakultaetenListeComponent', () => {
  let component: FakultaetenListeComponent;
  let fixture: ComponentFixture<FakultaetenListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetenListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
