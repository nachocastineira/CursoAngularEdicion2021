import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  //Puede buscar por elementos html (h5), por clases o por tags con referencia local (#txt)
  // ElementRef es el tipo de dato que retorna el input del form
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; //El signo ! le dice que nunca será null

  // Inyecto el servicio para poder usarlo, siempre es necesario
  constructor( private gifsService: GifsService ){}

  buscar( termino: string ){

    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = ''; // Para limpir la variable luego de usarse
    

  }

}
