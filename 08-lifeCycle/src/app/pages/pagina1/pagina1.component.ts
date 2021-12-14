import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
    implements OnInit, OnChanges, DoCheck, AfterContentInit, 
               AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  // No se llamará si no se utilizan inputs (@Inputs), se llama antes del OnInit
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  //Detecta y actúa sobre los cambios que Angular no puede o no detectará por sí solo. 
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //Responde después de que Angular proyecte contenido externo en la vista del componente o 
  //en la vista en la que se encuentra una directiva.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //Responde después de que Angular verifique el contenido proyectado en la directiva o el componente.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // despues de inicializar las vistas del componente y las vistas secundarias
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //Responde después de que Angular verifique las vistas del componente y 
  //las vistas secundarias, o la vista que contiene la directiva.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');  
  }

  // se llama antes que angular destruya la directiva o el componente. Cancela subcripcion a observables
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  // inicializar directivas o el componente, se llama una sola vez y luego del construcutor
  ngOnInit(): void {
    console.log('ngOnInit');
  }


  guardar(){

  }
}
