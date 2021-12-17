import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() mensaje: string = 'Este campo es necesario'

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
   }

  ngOnInit(): void {
    this.setMensaje();
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
