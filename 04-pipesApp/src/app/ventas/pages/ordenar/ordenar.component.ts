import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    }
  ];



  cambiarBooleanMayusculas() {
    if(this.enMayusculas)
        this.enMayusculas = false;
    else
        this.enMayusculas = true;    
  }

  cambiarOrden( valor:string ){
    this.ordenarPor = valor;
  }
}
