import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSuchenComponent } from './professor-suchen.component';

describe('ProfessorSuchenComponent', () => {
  let component: ProfessorSuchenComponent;
  let fixture: ComponentFixture<ProfessorSuchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorSuchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
