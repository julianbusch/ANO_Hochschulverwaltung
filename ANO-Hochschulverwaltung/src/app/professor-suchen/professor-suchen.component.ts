import {Component, OnInit} from '@angular/core';
import {Professor} from '../professorenverwaltung/professor';
import {ProfessorService} from '../professorenverwaltung/professor.service';

@Component({
  selector: 'app-professor-suchen',
  templateUrl: './professor-suchen.component.html',
  styleUrls: ['./professor-suchen.component.css']
})


export class ProfessorSuchenComponent implements OnInit {
  professor: Professor; // Suchkriterium
  professoren: Professor[]; // Suchergebnis
  constructor(private professorService: ProfessorService) { }
  ngOnInit() {
    this.professor = new Professor();
  }
  suchen() {
    this.professorService.getProfessoren(this.professor).subscribe(
      professoren => this.professoren = professoren);
  }
  delete(professor: Professor): void {
    this.professorService.delete(professor).subscribe(prof => this.suchen());
  }
}
