import { Component, OnInit } from '@angular/core';
import { cloneProfessor, equalsProfessor, Professor } from '../professor';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { AenderungenSpeichernInterface } from '../../aenderungen-speichern/aenderungen-speichern-interface';
@Component({
  selector: 'app-professor-aendern',
  templateUrl: './professor-aendern.component.html',
  styleUrls: ['./professor-aendern.component.css']
})

export class ProfessorAendernComponent implements
  OnInit, AenderungenSpeichernInterface {
  professor: Professor | undefined;
  oriProfessor: Professor | undefined;
  aenderungenGespeichert: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) { }

  ngOnInit() {
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string | null = routeSnapshot.params['kuerzel'];
    if (kuerzel) {
      this.professorService.getProfessor(kuerzel).subscribe(
        (professor: Professor) => {
          if (professor) {
            this.oriProfessor = professor;
            this.professor = cloneProfessor(this.oriProfessor);
          } else {
            this.router.navigateByUrl('/list');
          }
        }
      );
    } else {
      this.router.navigateByUrl('/list');
    }
  }

  update(professor: Professor): void {
    this.professorService.update(professor).subscribe(
      (prof: Professor) => {
        this.aenderungenGespeichert = true;
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    );
  }
  hatUngespeicherteAenderungen(): boolean {
    if (this.professor && this.oriProfessor) {
      return !this.aenderungenGespeichert &&
        !equalsProfessor(this.professor, this.oriProfessor);
    } else {
      return false;
    }
  }
}


// alt 2


/*

import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {cloneProfessor, equalsProfessor, Professor} from '../professor';
import {AenderungenSpeichernInterface} from '../../aenderungen-speichern/aenderungen-speichern-interface';

@Component({
  selector: 'app-professor-aendern',
  templateUrl: './professor-aendern.component.html',
  styleUrls: ['./professor-aendern.component.css']
})
export class ProfessorAendernComponent implements OnInit, AenderungenSpeichernInterface {

  professor: Professor|undefined;

  oriProfessor: Professor | undefined;
  aenderungenGespeichert: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) { }

  ngOnInit() {
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string | null = routeSnapshot.params['kuerzel'];

    if (kuerzel) {
      this.professorService.getProfessor(kuerzel).subscribe(
        (professor: Professor) => {
          if (professor) {
            this.oriProfessor = professor;
            this.professor = cloneProfessor(this.oriProfessor);
          } else {
            this.router.navigateByUrl('/list');
          }
        }
      );
    } else {
      this.router.navigateByUrl('/list');
    }
  }

  update(professor: Professor): void {
    this.professorService.update(professor).subscribe(
      (prof: Professor) => {
        this.aenderungenGespeichert = true;
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

  hatUngespeicherteAenderungen(): boolean {
    if (this.professor && this.oriProfessor) {
      return !this.aenderungenGespeichert &&
        !equalsProfessor(this.professor, this.oriProfessor);
    } else {
      return false;
    }
  }
}

*/


    // alt 1

/*
this.oriProfessor = kuerzel ? this.professorService.getProfessor(kuerzel) : undefined;
if (this.oriProfessor) {
  this.professor = cloneProfessor(this.oriProfessor);
  // Um Änderungen feststellen zu können
} else {
  this.router.navigateByUrl('/list');
}


update(professor: Professor): void {
this.professorService.update(professor);
this.aenderungenGespeichert = true;
this.router.navigate(['../../'], {relativeTo: this.route});
}


hatUngespeicherteAenderungen(): boolean {
if (this.professor && this.oriProfessor) {
  return !this.aenderungenGespeichert &&
    !equalsProfessor(this.professor, this.oriProfessor);
} else {
  return false;
}
}
]

 */

