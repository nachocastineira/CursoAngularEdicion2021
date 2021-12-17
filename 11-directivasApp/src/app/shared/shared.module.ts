import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
