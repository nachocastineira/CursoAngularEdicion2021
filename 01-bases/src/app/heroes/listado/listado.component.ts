import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor']
  heroeBorrado: string = ''; 

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }

}
