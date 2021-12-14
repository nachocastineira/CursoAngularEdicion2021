import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ false, Validators.requiredTrue ] 
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  //valores por defecto en el form
  ngOnInit() {
    this.miForm.reset( { ...this.persona, terminos: false } );

    this.miForm.valueChanges.subscribe( form => {
      delete form.terminos;
      this.persona = form;
      
    } )
  }

  guardar() {

    const formValue = { ...this.miForm.value };
    delete formValue.terminos; // borro este dato porque no me interesa para la persona

    this.persona = formValue; // se asignaran los valores genero y notif del form al objeto persona

  }


}
