import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen',
  // el pipe se va a invocar cada vez que haya un cambio (ciclo de deteccion de cambios)
  pure: false //Solo en casos muy especificos 
  //el pure por default es true, que solo se invoca cuando el objeto cambie (distinto espacio de memoria)
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

      if( !heroe.id && !heroe.alt_img ) {
        return 'assets/no-image.png'

      } else if (heroe.alt_img) {
        return heroe.alt_img;

      } else {
        return 'assets/heroes/'+heroe.id+'.jpg';
      }
 }

}
