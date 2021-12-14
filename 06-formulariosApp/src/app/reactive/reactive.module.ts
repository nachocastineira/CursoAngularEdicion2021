import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicoComponent } from './basico/basico.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicoComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
