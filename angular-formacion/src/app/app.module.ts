import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;


import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoPersonaComponent } from './ingreso-persona/ingreso-persona.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IngresoPersonaComponent,
    HomeComponent,
    AboutComponent
  ],
  // modulos internos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  // para apis de terceros
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
