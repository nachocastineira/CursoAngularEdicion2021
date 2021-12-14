import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    //en lugar de un componente voy a cargar un modulo
    //esta es la clave del LazyLoad
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'heroes',
    //en lugar de un componente voy a cargar un modulo
    //esta es la clave del LazyLoad
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
    canLoad: [ AuthGuard ], // si no estoy autenticado no cargo este HeroesModule
    canActivate: [ AuthGuard ] // si no estoy autenticado no puedo acceder a las rutas del HeroesModule
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent,
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )   
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
