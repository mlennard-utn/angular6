import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-persona',
  templateUrl: './ingreso-persona.component.html',
  styleUrls: ['./ingreso-persona.component.css']
})
export class IngresoPersonaComponent implements OnInit {

  public nombre: String;
  public apellido: String;

  constructor() {}

  ngOnInit() {
  }

  public enviar() :void {
    console.log('llego' + this.nombre + ' ' + this.apellido );
  }

}
