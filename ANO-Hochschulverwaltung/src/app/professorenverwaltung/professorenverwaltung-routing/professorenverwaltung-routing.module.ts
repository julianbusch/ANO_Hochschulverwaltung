import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfessorenListeComponent} from '../professoren-liste/professoren-liste.component';
import {ProfessorErstellenComponent} from '../professor-erstellen/professor-erstellen.component';
import {ProfessorAendernComponent} from '../professor-aendern/professor-aendern.component';
import {ProfessorenverwaltungComponent} from '../professorenverwaltung/professorenverwaltung.component';
import {AuthentifizierungGuard} from '../../log-in-out/authentifizierung.guard';
import {AenderungenSpeichernGuard} from '../../aenderungen-speichern/aenderungen-speichern.guard';
import {ProfessorSuchenComponent} from '../../professor-suchen/professor-suchen.component';


const routes: Routes = [
  {
    path: 'professor',
    component: ProfessorenverwaltungComponent,
    canActivate: [AuthentifizierungGuard],
    canActivateChild: [AuthentifizierungGuard],
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ProfessorenListeComponent},
      {path: 'create', component: ProfessorErstellenComponent,
        canDeactivate: [AenderungenSpeichernGuard]},
      {path: 'edit/:kuerzel', component: ProfessorAendernComponent,
        canDeactivate: [AenderungenSpeichernGuard]},
      {path: 'find', component: ProfessorSuchenComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProfessorenverwaltungRoutingModule {
}
