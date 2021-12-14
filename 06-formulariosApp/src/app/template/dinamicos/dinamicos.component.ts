import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  nuevoJuego: string = '';


  persona: Persona = {
    nombre: 'Pepe',
    favoritos: [
      { id: 1, nombre: 'Game 1' },
      { id: 2, nombre: 'Game 2' },
      { id: 3, nombre: 'Game 3' }
    ]
  }

  //uso de una referencia local, en este caso del formulario html
  @ViewChild('miForm') miForm!: NgForm;

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';

  }



  guardar(){

  }

}
