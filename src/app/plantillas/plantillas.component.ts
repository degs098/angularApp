import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent{

  private title: string;
  private administrador: Boolean;

  constructor(){
    this.title = 'Plantillas component';
    this.administrador = true;
  }
}