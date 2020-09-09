import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FakultaetsverwaltungComponent} from '../fakultaetsverwaltung/fakultaetsverwaltung.component';
import {FakultaetenListeComponent} from '../fakultaeten-liste/fakultaeten-liste.component';

const routes: Routes = [
  {
    path: 'fakultaet',
    component: FakultaetsverwaltungComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
           {path: 'list', component: FakultaetenListeComponent},
           // {path: 'create', component: ProfessorErstellenComponent},
           // {path: 'edit/:kuerzel', component: ProfessorAendernComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class FakultaetsverwaltungRoutingModule { }
