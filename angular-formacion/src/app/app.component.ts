import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-formacion';
  
  // visibilidad: public private protected

  public nombre: String = 'Martin';

}
