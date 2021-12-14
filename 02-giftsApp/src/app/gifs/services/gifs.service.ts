import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsSearchResponse, Gif } from '../interfaces/gifs.interface';

// con esta anotacion se le indica que el servicio que será global estará disponible para todos
// evito tener que referenciarlo en un tag providers de un module.ts, se puede hacer si es necesario
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '9yEVEqfk9oMzXm7dt03jSloQLxe3SKTl';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]; //rompo la referencia usando operador spread, regreso nuevo array
  }

  // Con esto puedo realizar peticiones HTTP
  constructor( private http: HttpClient ) {

    // primera forma de usar localstorage y setearselo al historial
    //si no hago esto al recargar la pagina pierdo el historial, aunque siga en el localstorage
    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];

    //para no perder los resultados si recargo la web
    this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];

    // segunda forma de usar localstorage y setearselo al historial
    // if( localStorage.getItem('historial') ){
    //                     //parse convierte el texto json al objeto indicado (_historial)
    //   this._historial = JSON.parse( localStorage.getItem('historial')!  )
    // }
  }

  buscarGifs( query: string ) {

    query = query.trim().toLowerCase(); //limito los espacios vacios y almaceno en minusculas

    //Para evitar duplicados en mi historial
    //Nueva funcion incorporada en ES6 (includes)
    if ( !this._historial.includes( query ) ){ //Si la query no está en mi historial lo agrego

      this._historial.unshift( query ); //uso unshift para insertarlo al principio del array
      this._historial = this._historial.splice(0,9); // Limito el historial a 10 elementos

      // Almaceno mis datos en el local storage del usuario - Para datos no sensibles
      localStorage.setItem( 'historial',  JSON.stringify(this._historial) ); //stringify transforma en string
    } 

    //genero los parametros del endpoint search
    const params = new HttpParams()
                        .set('api_key', this.apiKey)
                        .set('limit', '10')
                        .set('lang', 'es')
                        .set('q', query);

    // Realizo la peticion, el suscribe se va ejecutar cuando tengamos la resolucion del get
    this.http.get<GifsSearchResponse>(`${ this.servicioUrl }/search`, {params: params})
        .subscribe( (resp: GifsSearchResponse) => {
          console.log(resp.data);      
          this.resultados = resp.data;  
          localStorage.setItem( 'resultados',  JSON.stringify(this.resultados) ); //stringify transforma en string
        });    
  }


}
