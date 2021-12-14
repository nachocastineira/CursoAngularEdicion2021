import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Ejemplo de una validacion asincrona que dependa de un servicio adicional (de otra inyeccion)
export class EmailValidatorService implements AsyncValidator {

  constructor( private http: HttpClient ) { }

  // metodo implementado de AsyncValidator
  // Retorno original: Promise<ValidationErrors | null> | Observable<ValidationErrors | null> 
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    
    return this.http.get<any[]>( `http://localhost:3000/usuarios?q=${ email }` )
                .pipe(
                  delay(3000),
                  map( resp => {
                    return ( resp.length === 0 ) ? null : { emailUsado: true }
                  } )
                )

  }
}
