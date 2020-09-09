import { Component, OnInit } from '@angular/core';
import {Fakultaet} from '../fakultaet';
import {FakultaetService} from '../fakultaet.service';

@Component({
  selector: 'app-fakultaeten-liste',
  templateUrl: './fakultaeten-liste.component.html',
  styleUrls: ['./fakultaeten-liste.component.css']
})
export class FakultaetenListeComponent implements OnInit {

  constructor(private fakultaetService: FakultaetService) { }

  private fakultaeten: Fakultaet[];
  selektierteFakultaet: Fakultaet|undefined;


  getFakultaeten(): void {
    this.fakultaeten = this.fakultaetService.getFakultaeten();
  }



  ngOnInit() {
    this.getFakultaeten();
  }

}
