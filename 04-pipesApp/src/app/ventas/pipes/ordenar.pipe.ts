import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    switch (ordenarPor) {
      case 'nombre':
        //funcion compartiva usando sort
        //si pri.nombre es mayor al seg.nombre retorno un 1 para que haga el cambio de orden sino el seg estará primero
        heroes = heroes.sort( (pri, seg) => ( pri.nombre > seg.nombre ) ? 1 : -1 )
        return heroes;
      
      case 'vuela':
        heroes = heroes.sort( (pri, seg) => ( pri.vuela > seg.vuela ) ? -1 : 1 )
        return heroes;

      case 'color':
        heroes = heroes.sort( (pri, seg) => ( pri.color > seg.color ) ? -1 : 1 )
        return heroes;  
    
      default:
        return heroes;
    }



  }

}
