import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorenListeComponent } from './professoren-liste.component';

describe('ProfessorenListeComponent', () => {
  let component: ProfessorenListeComponent;
  let fixture: ComponentFixture<ProfessorenListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorenListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
