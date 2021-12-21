import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  registrar( name: string, email: string, password: string ) {

    const url = `${ this.baseUrl }/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>( url, body )
        .pipe(
          tap( resp => {
            if ( resp.ok ) {
              localStorage.setItem('token', resp.token! );
              this._usuario = { name: resp.name!, uid: resp.uid! }
            }
          }),
          map( resp => resp.ok ),
          catchError( err => of(err.error.msg) )
        );

  }

  login( email: string, password: string ) {

    const url = `${ this.baseUrl }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
        .pipe(
          tap( resp => {
            if ( resp.ok ) {
              localStorage.setItem('token', resp.token! );
              this._usuario = { name: resp.name!, uid: resp.uid! }
            }
          }),
          map( resp => resp.ok ),
          catchError( err => of(err.error.msg) )
        );
  }

  // Mandando el token en una peticio /auth/renew obtendré los datos del usuario
  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    // mandará en un tag header el token recuperado del localStorage, si no está mando vacio 
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
          .pipe(
            map( resp => { 
              localStorage.setItem('token', resp.token! );
              this._usuario = { name: resp.name!, uid: resp.uid! }
              return resp.ok;
             }),
             // falla si el token no es correcto
             catchError( err => of(false) )
          );
  }

  logout() {
    localStorage.clear();
  }




}
