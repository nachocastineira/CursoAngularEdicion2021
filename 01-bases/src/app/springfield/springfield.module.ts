import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { SpringfieldService } from './services/springfield.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule //Manejo de formularios propio de Angular
  ],
  exports: [
    MainPageComponent
  ],
  providers: [ //servicios
    SpringfieldService
  ]
})
export class SpringfieldModule { }
