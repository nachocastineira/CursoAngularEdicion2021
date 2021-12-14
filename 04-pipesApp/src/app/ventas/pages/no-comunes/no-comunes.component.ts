import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Juan';
  genero: string = 'M';
  //se cambia una palabra en base a otra que la condiciona, usando un map y el pipe i18nSelect
  invitacionMap = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }
  //--------

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    if(this.genero == 'M') {
      this.nombre = 'Maria';
      this.genero = 'F';
    }
    else {
      this.nombre = 'Juan';
      this.genero = 'M'; 
    }

  }

  borrarCliente(){
    this.clientes.pop(); //elimina el ultimo elemento
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan',
    edad: 40,
    direccion: 'Ottawa, Canadá'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]

  // Async Pipe --> solo se puede usar en Observable o Promises
  miObservable = interval(1000); // va a emitir 0 luego 1, 2 etc. Retorna un observable

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de la promesa' );
    }, 3500);
  } );

}
