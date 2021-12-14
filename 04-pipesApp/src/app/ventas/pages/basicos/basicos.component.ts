import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'fERNANdo herrERA';

  fecha: Date = new Date(); // el dia de hoy

}
