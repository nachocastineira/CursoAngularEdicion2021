import { Component} from '@angular/core';
import { SpringfieldService } from '../services/springfield.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //El input le indica que esos personajes vendrán del componente padre
 // @Input() personajes: Personaje[] = []; //Está conectada con la inteface Personaje

  get personajes(){
    return this.springfieldService.personajes;
  }

  constructor( private springfieldService: SpringfieldService ) {
    this.springfieldService.personajes;
  }
}
