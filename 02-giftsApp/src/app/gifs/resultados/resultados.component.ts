import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifsService.resultados;
  }

  // Inyecto el servicio para poder usarlo, siempre es necesario
  constructor( private gifsService: GifsService ){}
}
