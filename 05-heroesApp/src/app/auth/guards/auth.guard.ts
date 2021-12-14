import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  // Lo usamos para restringir rutas y no cargar modulos si el usuario no está autenticado (auth undefined)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if( !estaAutenticado ) {
                    this.router.navigate(['./auth/login']);
                  }
                })
              );

      // si el id existe entonces puede acceder a la ruta
      // if ( this.authService.auth.id ) {
      //   return true;
      // }
      // // sino no accederá a las rutas (usuario no autenticado o auth.id undefined)
      // return false; 
  }

  // Esto se crea para evitar cargar un modulo al que un usuario no pueda acceder
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if( !estaAutenticado ) {
                    this.router.navigate(['./auth/login']);
                  }
                })
              );

      // si el id existe entonces puede acceder a la ruta
      // if ( this.authService.auth.id ) {
      //   return true;
      // }
      // // sino no accederá a las rutas (usuario no autenticado o auth.id undefined)
      // return false; 
  }
}
