import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetsverwaltungComponent } from './fakultaetsverwaltung.component';

describe('FakultaetsverwaltungComponent', () => {
  let component: FakultaetsverwaltungComponent;
  let fixture: ComponentFixture<FakultaetsverwaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetsverwaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetsverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
