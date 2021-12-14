import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [
  ]
})
export class BasicoComponent implements OnInit {

  ngOnInit() {
    // Si quiero establecerle valores por defecto al formulario
    // debemos ponerle valor a todos los inputs que sean requeridos, sino reventará
    // this.miForm.setValue({
    //   producto: 'valor defecto',
    //   precio: 10,
    //   existencias: 1
    // })
  }

  // Forma sin usar FormBuilder (solo FormGroup), lo usamos para formularios con pocos datos
  // miForm: FormGroup = new FormGroup ({
  //   'producto' : new FormControl(''),
  //   'precio' : new FormControl(0),
  //   'existencias' : new FormControl(0)
  // })

  // Mapeo de formulario usando FormBuilder, recomendado para formularios con muchos campos, 
  //es mas simple, debe inyectar el FormBuilder en el constructor 
  miForm: FormGroup = this.fb.group({
    //despues de cada valor y luego de la coma vienen los validadores sincronos (mientras el user tipea)
    // y luego los validadores asincronos (se ejecuta en otro hilo de tiempo (puede ir a la bd y volver))
    // Ej: [ valor, validador sincrono, validador asincrono ]
    // si tengo varios validadores de un mismo tipo los agrupo en un mismo array ,[ dsd, sds , ss],
    producto: [ '', [ Validators.required, Validators.minLength(3) ] ], 
    precio: [ 0, [ Validators.required, Validators.min(0) ] ],
    existencias: [ 0, [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  guardar() {

    if( this.miForm.invalid ) {
      this.miForm.markAllAsTouched(); // se tocan todos los inputs para mostrar los span de error 
      return;
    }

    console.log(this.miForm); 
    this.miForm.reset(); //limpio el form al terminar

  }



}
