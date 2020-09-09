import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorErstellenComponent } from './professor-erstellen.component';

describe('ProfessorErstellenComponent', () => {
  let component: ProfessorErstellenComponent;
  let fixture: ComponentFixture<ProfessorErstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorErstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
