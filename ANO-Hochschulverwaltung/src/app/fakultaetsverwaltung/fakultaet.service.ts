import { Injectable } from '@angular/core';
import {Fakultaet} from './fakultaet';

@Injectable({
  providedIn: 'root'
})
export class FakultaetService {
  private faks: Fakultaet[] = [
    {vorname: 'Hans', nachname: 'Peter', kuerzel: 'HAP', raum: '111', telefon: '12345'},
    {vorname: 'affe', nachname: 'banane', kuerzel: 'ab', raum: '222'},
    {vorname: 'uschi', nachname: 'müller', kuerzel: 'USC'},
    {vorname: 'last', nachname: 'last'},
    ]

  constructor() { }

  getFakultaeten(): Fakultaet[] {
    return this.faks;
  }
}
