import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {

    @Input() paises: Pais[] = [];


}
