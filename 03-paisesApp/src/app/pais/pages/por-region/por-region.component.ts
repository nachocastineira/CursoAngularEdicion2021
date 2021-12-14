import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['europe', 'americas', 'asia', 'oceania', 'africa'];
  regionActiva: string = '';
  region: string = ''
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) {} 

  //Una de las tantas formas de css condicional
  getClaseCSS( region: string ): string {
    return (region === this.regionActiva)
          ? 'btn btn-primary'
          : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    this.regionActiva = region;

    this.hayError = false;
    this.region  = region; //el this.termino será igual al termino que yo recibo del input por parametro

    this.paisService.buscarPorRegion( this.region )
      .subscribe( (paises) => {
        this.paises = paises;       
      })
  }

  sugerencias( termino:string ){
    this.hayError = false;
  }

}
