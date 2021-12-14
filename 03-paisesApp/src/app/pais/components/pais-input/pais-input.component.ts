import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //añado un evento output para el input del formulario, le especifico el tipo de dato (string del input)
  //Emito el dato para que el componente padre pueda utilizarlo en su metodo buscar
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //Se emitirá cuando la persona deje de escribir en el input
  //Si trabajaramos con formularios reactivos hay una mejor forma de hacerlo
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = ''; //para cambiar placeholder segun sea la pantalla

  //Esto no es propio de Angular sino de rxjs
  // Para que funcione hacemos uso del OnInit de Angular
  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300) ) //cuantas milesimas quiero esperar para emitir el sig valor    
      .subscribe( valor => {
        this.onDebounce.emit(valor); //emito el valor
    });
  }

  teclaPresionada(){

    //cuando alguien presione un tecla mandará a llamar al next, el next está suscrito en el onInit
    this.debouncer.next( this.termino );
  }


  termino: string = '';
  
  // Este buscar será para el ngSubmit del formulario en pais-input.component.html
  buscar(){
    this.onEnter.emit( this.termino ); //cuando el user presione enter en el input 'buscar pais'
  }

}
