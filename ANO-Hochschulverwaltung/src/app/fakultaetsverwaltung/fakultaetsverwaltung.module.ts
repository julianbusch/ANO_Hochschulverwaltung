import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakultaetsverwaltungComponent } from './fakultaetsverwaltung/fakultaetsverwaltung.component';
import {RouterModule, Routes} from '@angular/router';
import {ProfessorenverwaltungComponent} from '../professorenverwaltung/professorenverwaltung/professorenverwaltung.component';
import {ProfessorenListeComponent} from '../professorenverwaltung/professoren-liste/professoren-liste.component';
import {ProfessorErstellenComponent} from '../professorenverwaltung/professor-erstellen/professor-erstellen.component';
import {ProfessorAendernComponent} from '../professorenverwaltung/professor-aendern/professor-aendern.component';
import {FakultaetsverwaltungRoutingModule} from './fakultaetsverwaltung-routing/fakultaetsverwaltung-routing.module';
import { FakultaetenListeComponent } from './fakultaeten-liste/fakultaeten-liste.component';

const routes: Routes = [
  {
    path: 'fakultaet',
    component: FakultaetsverwaltungComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
/*      {path: 'list', component: ProfessorenListeComponent},
      {path: 'create', component: ProfessorErstellenComponent},
      {path: 'edit/:kuerzel', component: ProfessorAendernComponent},*/
    ]
  }
];
@NgModule({
  declarations: [FakultaetsverwaltungComponent, FakultaetenListeComponent],
  imports: [CommonModule, RouterModule],
  exports: [FakultaetsverwaltungRoutingModule]
})
export class FakultaetsverwaltungModule { }
