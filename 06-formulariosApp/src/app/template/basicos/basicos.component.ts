import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //uso de una referencia local, en este caso del formulario html
  @ViewChild('miFormulario') miFormulario!: NgForm;

  // valores iniciales del formulariio
  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid 
    && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    if(this.miFormulario?.controls['precio']?.value < 0 && this.miFormulario?.controls['precio']?.touched)
      return true;
    else {
      return false;
    }
  }

  // guardar( miFormulario: NgForm ){ //usando el view child ya no es necesario esto
    guardar(){
    console.log( this.miFormulario );

    this.miFormulario.resetForm( {
      precio: 0,
      existencias: 0
    });
    
  }

}
