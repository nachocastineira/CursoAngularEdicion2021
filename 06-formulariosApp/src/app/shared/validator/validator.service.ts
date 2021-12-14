import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  // La validacion es la misma de validaciones.ts, pero debemos crearla acá si debemos realizar
  //  inyeccion de depencias o llamar a otros servicios que traiga x dato
  noPuedeSerStrider( control: FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if ( valor === 'strider' ) {
      return { noStrider: true }
    }
    return null; // si retorna null es que no existen errores. Si regreso algo será considerado error
  }

  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true }); //a contraseña 2 le establezco los errores de noIguales
        return { noIguales: true }
      }
      
      formGroup.get(campo2)?.setErrors(null);
      return null
    }

  }

}
