import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerooesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { SpringfieldModule } from './springfield/springfield.module';
import { MainPageComponent } from './springfield/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerooesModule,
    ContadorModule,
    SpringfieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
