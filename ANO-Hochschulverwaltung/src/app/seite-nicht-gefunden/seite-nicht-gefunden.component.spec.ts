import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeiteNichtGefundenComponent } from './seite-nicht-gefunden.component';

describe('SeiteNichtGefundenComponent', () => {
  let component: SeiteNichtGefundenComponent;
  let fixture: ComponentFixture<SeiteNichtGefundenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeiteNichtGefundenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeiteNichtGefundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
