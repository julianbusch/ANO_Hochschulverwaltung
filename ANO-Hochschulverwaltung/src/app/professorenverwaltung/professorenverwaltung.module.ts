import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorenListeComponent} from './professoren-liste/professoren-liste.component';
import {ProfessorAendernComponent} from './professor-aendern/professor-aendern.component';
import {ProfessorDetailsComponent} from './professor-details/professor-details.component';
import {FormsModule} from '@angular/forms';
import {ProfessorErstellenComponent} from './professor-erstellen/professor-erstellen.component';
import {RouterModule} from '@angular/router';
import { ProfessorenverwaltungComponent } from './professorenverwaltung/professorenverwaltung.component';
import {ProfessorenverwaltungRoutingModule} from './professorenverwaltung-routing/professorenverwaltung-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LogInOutModule} from '../log-in-out/log-in-out.module';
import {ProfessorSuchenComponent} from '../professor-suchen/professor-suchen.component';


@NgModule({
  declarations: [ProfessorenListeComponent, ProfessorAendernComponent,
    ProfessorDetailsComponent, ProfessorErstellenComponent, ProfessorenverwaltungComponent],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule, LogInOutModule],
  exports: [ProfessorenverwaltungRoutingModule]
})
export class ProfessorenverwaltungModule {
}
