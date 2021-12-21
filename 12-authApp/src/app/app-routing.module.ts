import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedModule } from './protected/protected.module';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule),
    canActivate: [ ValidarTokenGuard ], //hacemos uso del guard creado para restringir la ruta a usuario no logueados
    canLoad: [ ValidarTokenGuard ]  // idem
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
