import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './basico/basico.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicoComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule { }
