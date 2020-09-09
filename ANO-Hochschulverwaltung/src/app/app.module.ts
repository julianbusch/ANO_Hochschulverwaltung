import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfessorenverwaltungModule} from './professorenverwaltung/professorenverwaltung.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { SeiteNichtGefundenComponent } from './seite-nicht-gefunden/seite-nicht-gefunden.component';
import {FakultaetsverwaltungModule} from './fakultaetsverwaltung/fakultaetsverwaltung.module';
import {LogInOutModule} from './log-in-out/log-in-out.module';
import {AenderungenSpeichernModule} from './aenderungen-speichern/aenderungen-speichern.module';
import { ProfessorSuchenComponent } from './professor-suchen/professor-suchen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeiteNichtGefundenComponent,
    ProfessorSuchenComponent

  ],
  imports: [
    BrowserModule,
    ProfessorenverwaltungModule,
    FakultaetsverwaltungModule,
    LogInOutModule,
    RouterModule,
    AppRoutingModule,
    AenderungenSpeichernModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
