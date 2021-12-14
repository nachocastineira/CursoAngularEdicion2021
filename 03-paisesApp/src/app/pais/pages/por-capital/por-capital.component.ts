import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) {} 

    //este buscar será para el (onEnter)="buscar( $event )" del <app-pais-input> en este por-pais.html
    buscar( termino: string ) {

      this.hayError = false;
      this.termino  = termino; //el this.termino será igual al termino que yo recibo del input por parametro
  
      this.paisService.buscarCapital( this.termino )
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
    }

}
