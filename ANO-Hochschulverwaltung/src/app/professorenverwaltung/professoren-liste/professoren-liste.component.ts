import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {Professor} from '../professor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professoren-liste',
  templateUrl: './professoren-liste.component.html',
  styleUrls: ['./professoren-liste.component.css']
})
export class ProfessorenListeComponent implements OnInit {

  professoren: Professor[];
  selektierterProfessor: Professor|undefined;

   constructor(private router: Router, private professorService: ProfessorService) { }

 //  constructor(private professorService: ProfessorService) { }


  ngOnInit() {
    this.getProfessoren();
  }

  /*
  getProfessoren(): void {
    const sub = function(profs: Professor[]) {
      return this.professoren = profs;
    }
    this.professorService.getProfessoren().subscribe(
      (sub));
  }

   */



  getProfessoren(): void {
    this.professorService.getProfessoren().subscribe(
      (profs: Professor[]) => this.professoren = profs);
  }

  selektiereProfessor(prof: Professor): void {
    this.selektierterProfessor = prof;
  }
  delete(professor: Professor): void {
    if (confirm(`Professor ${professor.vorname} ${professor.nachname} wirklich löschen?`)) {
      if (this.selektierterProfessor &&
        professor.kuerzel === this.selektierterProfessor.kuerzel) {
        this.selektierterProfessor = undefined;
      }
      this.professorService.delete(professor).subscribe(
        (prof: Professor) => this.getProfessoren());
    }
  }



  // alt
  /*
  getProfessoren(): void {
    this.professoren = this.professorService.getProfessoren();
  }

  selektiereProfessor(prof: Professor): void {
    this.selektierterProfessor = prof;
  }

  delete(professor: Professor): void {
    if (confirm('Möchten Sie den Prof' + professor.kuerzel + 'wirklich löschen?')) {
      if (this.selektierterProfessor && professor.kuerzel === this.selektierterProfessor.kuerzel) {
        this.selektierterProfessor = undefined;
      }
    }
    this.professorService.delete(professor);
    this.getProfessoren();


  }

*/

}
