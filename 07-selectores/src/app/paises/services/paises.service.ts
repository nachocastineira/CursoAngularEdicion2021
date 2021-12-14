import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { PaisSmall, Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v2'
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones() {
    return [...this._regiones]; //lo desestructuro para que no se pueda alterar el array original
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {

    const url: string = `${ this._baseUrl }/region/${ region }?fields=alpha3Code,name`;
    return this.http.get<PaisSmall[]>( url );
  }

  getPaisPorCodigo ( codigo: string ): Observable<Pais | null>{

    if ( !codigo ) {
      return of(null)
    }

    const url: string = `https://restcountries.com/v3.1/alpha/${codigo}`;
    return this.http.get<Pais>( url );   
  }

  getPaisPorCodigoSmall ( codigo: string ): Observable<PaisSmall>{

    const url: string = `https://restcountries.com/v3.1/alpha/${codigo}?fields=alpha3Code,name`;
    return this.http.get<PaisSmall>( url ); 
  }

  getPaisesPorCodigo( borders: string[] ) {

    if (!borders) {
      return of([]);
    }

    const peticiones : Observable<PaisSmall>[] = [];
    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push( peticion );
    });

    //se dispiran todas las peticiones de forma simultanea, uso un combineLatest de RXJS
    return combineLatest( peticiones );

  }



}
