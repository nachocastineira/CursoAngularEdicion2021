import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/springfield.inteface";

@Injectable()
export class SpringfieldService {

    // Se usa el guion bajo para indicar que es una propiedad privada
    private _personajes: Personaje[] = [
        {
          nombre: 'Homero',
          edad: 45
        },
        {
          nombre: 'Apu',
          edad: 40
        },
        {
          nombre: 'Flanders',
          edad: 55
        }
      ]

     get personajes(): Personaje[] {
         //Se usa el [...] para romper la referencia con el objeto y protegerlo
         return [...this._personajes];
     } 

    constructor() { }

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }

}