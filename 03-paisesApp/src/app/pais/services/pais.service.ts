import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  //Optimizacion de peticiones, filtrando solo los datos que voy a usar
  //mejora considerablemente los tiempos de respuesta en apis con mucha información
  // No lo implemento porque dejó de estar disponible en la v3.1 de la API
  get httpParams() {
    return new HttpParams().set( 'fields', 'name, capital, flags, population' );
  }


  buscarPais( termino:string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Pais[]>(url);
    // return this.http.get<Pais[]>(url, { params: this.httpParams } );
  }

  buscarCapital( termino:string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorId( id:string ): Observable<Pais> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Pais>(url);
  }

  buscarPorRegion( termino:string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Pais[]>(url);
  }

}
