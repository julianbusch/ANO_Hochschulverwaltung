import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SeiteNichtGefundenComponent} from '../seite-nicht-gefunden/seite-nicht-gefunden.component';


const routes: Routes = [
  {path: '', redirectTo: 'professor', pathMatch: 'full'},
  {path: '**', component: SeiteNichtGefundenComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
