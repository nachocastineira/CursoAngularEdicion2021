import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['Ej 1', Validators.required ],
      ['Ej 2', Validators.required ]
    ], Validators.required )
  });

  // Solo para el nuevo favorito, puedo validar todo antes de agregarlo en el otro metodo al array
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) { return; }

    // agrego el nuevo favorito al form control que lo contiene (el de la linea 12)
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset(); // limpio el valor luego de ingresarlo
  }

  borrar( index: number ) {
    this.favoritosArr.removeAt( index );
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
