import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorenverwaltungComponent } from './professorenverwaltung.component';

describe('ProfessorenverwaltungComponent', () => {
  let component: ProfessorenverwaltungComponent;
  let fixture: ComponentFixture<ProfessorenverwaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorenverwaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorenverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
