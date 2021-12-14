import { FormControl } from "@angular/forms";

  export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  // Tranformamos un metodo comun a una funcion para que pueda ser reutiilizada en otro componente
//   noPuedeSerStrider( control: FormControl ) {
//     const valor: string = control.value?.trim().toLowerCase();
//     if ( valor === 'strider' ) {
//       return { noStrider: true }
//     }
//     return null; 
//   }

  // lo podemos usar para validar algun dato que no puede ser incluido en el formulariio
  // Si esa palabra viene de la BD o una API debemos realizar la validacion en un .service.ts
  export const noPuedeSerStrider = ( control: FormControl ) => {
    const valor: string = control.value?.trim().toLowerCase();
    if ( valor === 'strider' ) {
      return { noStrider: true }
    }
    return null; // si retorna null es que no existen errores. Si regreso algo será considerado error
  }