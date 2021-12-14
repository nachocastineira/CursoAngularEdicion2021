import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/springfield.inteface';
import { SpringfieldService } from '../services/springfield.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
      nombre: '',
      edad: 0
    }

  // Inyección de dependencias
  constructor( private springfieldService: SpringfieldService ){ }

  // Es una buena practica ponerle el tipo en lugar de usar <any>
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();  

  agregar( ){
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    // this.personajes.push(this.nuevo); //Esta forma ya no lo usamos, ahora lo hacemos con eventEmitter
    //Ahora ese push lo hacemos en el main component pasando ese personajeNuevo como event por parametro
    // this.onNuevoPersonaje.emit( this.nuevo );

    this.springfieldService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', edad: 0 }
  }

}
