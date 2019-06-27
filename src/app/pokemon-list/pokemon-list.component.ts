import { Component, OnInit } from '@angular/core';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  public img_test:string =  "/assets/images/18.png";
  public column:number = 3;
  public row:number;
  public array:number[];

  constructor() { }

  ngOnInit() {
    this.row = Math.ceil(30/3);
    this.array = new Array(this.row);
  }

}
