import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

// Las directivas nos proveen de muchas funciones en un input, podemos realizar validaciones extras


// Para que funcione, la directva debe ser incluida en el modulo (template.module.ts)

@Directive({
    // le digo a angular como usar mi directiva personalizada, como lo busca al directive del input
    selector: '[customMin][ngModel]',  //si no tiene el customMin (nombreTag) y el ngModel no lo va a reconocer el input
    // tambien le agregamos ciertas dependencias para que funcione correctamente
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validators {

    @Input() minimo!: number;

    constructor(){
        console.log();
    }

    validate( control: FormControl ) {
        const inputValue = control.value;

        // si el input value es menor al minimo (0 en este caso) regreso un objeto con el error, 
        // caso contrario retorno un null para avisar que no hay errores
        return ( inputValue < this.minimo ) ? { 'customMin' : true } : null;

    }

}