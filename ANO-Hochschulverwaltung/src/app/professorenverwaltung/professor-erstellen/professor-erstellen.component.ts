import {Component, OnInit} from '@angular/core';
import {equalsProfessor, Professor} from '../professor';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfessorService} from '../professor.service';
import {AenderungenSpeichernInterface} from '../../aenderungen-speichern/aenderungen-speichern-interface';

@Component({
  selector: 'app-professor-erstellen',
  templateUrl: './professor-erstellen.component.html',
  styleUrls: ['./professor-erstellen.component.css']
})
export class ProfessorErstellenComponent implements OnInit , AenderungenSpeichernInterface {

  // professor: Professor = new Professor();
  professor: Professor;
  aenderungenGespeichert: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) {
  }

  ngOnInit() {
    this.professor = new Professor();
  }

  save(professor: Professor): void {
    this.professorService.create(this.professor).subscribe(
      (prof: Professor) => {
        this.aenderungenGespeichert = true;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }
  hatUngespeicherteAenderungen(): boolean {
    return !this.aenderungenGespeichert;
  }


  // alt
  /*
  save(professor: Professor): void {
    this.professorService.create(this.professor);
    this.aenderungenGespeichert = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  hatUngespeicherteAenderungen(): boolean {
    return !this.aenderungenGespeichert && !equalsProfessor(this.professor, new Professor());
  }

   */
}
