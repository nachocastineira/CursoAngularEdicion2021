import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais[]; //Lo trato ocomo que nunca podrá ser nulo

  // con esto puedo obtener lo que esté en la ruta, en este caso para http://localhost:4200/pais/ARG
  // es posible porque se lo defini en las rutas, que le pueda mandar pais/:id
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisServices: PaisService
    ) { }

  ngOnInit(): void {

    //- primera forma de hacerlo, usando un switchMap de rxjs
    this.activatedRoute.params
      .pipe( 
        switchMap( ({id}) => this.paisServices.getPaisPorId( id ) ), //acá vienen los operadores de rxjs
        tap(console.log ) //uso de otro operador de rxjs, muy importante y utilizado
                          //el tap dispara un efecto secundario, en este caso un log
        )  
      .subscribe( pais => this.pais = pais );

    //- segunda forma de hacerlo, con más lineas y sin rxjs
    // this.activatedRoute.params
    //   .subscribe( ({id}) => { //uso la desestructuración y solo obtengo el id de param
    //     console.log(id);

    // //utilizo el id/code que viene en la ruta para llamar al servicio que retorna el pais por code
    // this.paisServices.getPaisPorId(id)
    //   .subscribe( pais => {
    //     this.pais = pais; 
    //     console.log(pais);
              
    //   });               
    // } )

  }

}
