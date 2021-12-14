import { Component } from '@angular/core';
import { Personaje } from '../interfaces/springfield.inteface';
import { SpringfieldService } from '../services/springfield.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  get personajes(): Personaje[] {
    return this.springfieldService.personajes;
  }

  nuevo: Personaje = {
    nombre: '',
    edad: 0
  }

  agregarNuevoPersonaje ( argumento: Personaje ) {
    this.personajes.push(argumento);
  }

  // Inyección de dependencias
  constructor(private springfieldService: SpringfieldService) {
  }

}
