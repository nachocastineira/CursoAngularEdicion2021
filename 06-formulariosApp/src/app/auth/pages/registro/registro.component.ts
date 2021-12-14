import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    // Las validaciones están realizadas en un archivo validaciones.ts y en un .service.ts ...
    // ... usamos uno u otro segun se crea necesario, en cada archivo se menciona que es mejor segun el caso
    // Ya se hizo en varios componentes, recordemoso ['', validacion sincronas, validaciones asincronas]
    // lo pattern son constantes definidas en el validator/validaciones.ts
    // Me puede ser tambien para traer un valor leido de un archivo .properties
    // si realizamos la validacion en un archivo .ts va '.pattern( nombreApellidoPattern )'
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ] ],
    contraseña2: ['', [ Validators.required,  ] ]
  }, {
    // Acá se realizan validaciones adicionales que van a impactar a todo el formulario
    // Si algun campo cambia se volverá a disparar las validaciones
    validators: [ this.validatorService.camposIguales('contraseña', 'contraseña2')  ]
  })

  // mensaje de error que se mostrará en el span de Email
  get emailErrorMsj(): string {

    const errors = this.miForm.get('email')?.errors;

    if (errors?.['required']) { return 'Correo obligatorio' }
     else if (errors?.['pattern']) { return 'Correo no tiene formato valido' }
      else if (errors?.['emailUsado']) { return 'Correo usado' }

    return ''; // Sin error
  }

  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
  }

    
  // metodos para mostrar o no los mensajes de error span
  campoNoValido( campo: string ) {
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  }

  // otras formas pero con mas lineas de codigo, es mejor usar el get emailErrorMsj (mejores practicas)
  // emailRequired() {
  //   return this.miForm.get('email')?.touched   
  //           && this.miForm.get('email')?.errors?.['required'];
  // }
  // emailFormato() {
  //   return this.miForm.get('email')?.touched   
  //           && this.miForm.get('email')?.errors?.['pattern'];
  // }
  // emailUsado() {
  //   return this.miForm.get('email')?.touched   
  //           && this.miForm.get('email')?.errors?.['emailUsado'];
  // }
  

  submitFormulario() {
    this.miForm.markAsTouched();
  }

}
