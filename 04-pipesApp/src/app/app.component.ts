import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //acceso a toda la configuracion global de PrimeNG
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  
  nombre: string = '--';

  mostrarNombre(){
    console.log(this.nombre);
    
  }

}
