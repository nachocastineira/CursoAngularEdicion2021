import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor( private paisService: PaisService ) {} 

  //este buscar será para el (onEnter)="buscar( $event )" del <app-pais-input> en este por-pais.html
  buscar( termino: string ) {

    this.hayError = false;
    this.termino  = termino; //el this.termino será igual al termino que yo recibo del input por parametro

    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;       
      }, (err) => {
        this.hayError = true;
        this.paises = []
      })
  }

  sugerencias( termino:string ){
    this.hayError = false;

    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = [] //si tipeo cualquier cosa no muestro paises
       );
  }

}
