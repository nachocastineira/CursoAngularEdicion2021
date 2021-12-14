import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '', //simula cuando estoy en la raiz http://localhost:4200, dominio sin más nada
        component: PorPaisComponent, //en esa ruta mostraremos el componente PorPais
        pathMatch: 'full' //deberá coincidir con la ruta especificada http://localhost:4200 exacta
    },
    {
        path: 'region', //ruta para http://localhost:4200/region
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**', //para todas las demas rutas no especificadas anteriormente
        redirectTo: '' //redirijo al index principal
        //tambien puedo poner el component: en vez de un redirect (si quiero mostrar una pantalla de error)
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes ) //Siempre se importa este modulo para que se utilice el manejo de ruta
    ],
    exports: [
        RouterModule //Tambien exporto el routerModule para poder utilizarlo fuera
    ]
})
export class AppRoutingModule {}