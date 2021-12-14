import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    region: ['', Validators.required ],
    pais: ['', Validators.required ],
    // frontera: [ { value: '', disabled: true }, Validators.required ] // desactivar select sin data
    frontera: [ '', Validators.required ] // desactivar select sin data
  })

  // Selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
 // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //cuando cambie la region  -- primera forma que es correcta pero menos legible
    // this.miForm.get('region')?.valueChanges
    //   .subscribe( region => {

    //     this.paisesService.getPaisesPorRegion( region )
    //       .subscribe( paises => {
    //         console.log(paises);
    //         this.paises = paises;           
    //       } )
    //   } )

    //cuando cambie la region-- Mejor opcion usando operadores de rxjs (switch map)
    this.miForm.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => { 
          this.miForm.get('pais')?.reset('')  //Limpia valor pais cuando region cambie
          // this.miForm.get('frontera')?.disable(); // otra forma de desactivar select sin datos
          this.cargando = true;
        }), 
        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
      )
      .subscribe( paises => {
        console.log(paises); 
        this.paises = paises;  
        this.cargando = false; 
      });

     //cuando cambie el pais
    this.miForm.get('pais')?.valueChanges
    .pipe(
      tap( ( _ ) => { 
        this.fronteras = [];
        this.miForm.get('frontera')?.reset('') 
        // this.miForm.get('frontera')?.enable(); // activo nuevamente select con datos
        this.cargando = true;
      }),
      switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) ),
      // switchMap( pais => this.paisesService.getPaisesPorCodigo( pais?.borders!) )
    )
    .subscribe( (pais: any) => {
      console.log(pais); 

      if  (!pais) {
        return;
      }
      else if (pais){
      
      this.fronteras = pais[0].borders;
      // this.fronteras = paises;    // no trae las fronteras. la api cambio, buscarle la vuelta

      this.cargando = false;
    } 
 
    } );



  }

  guardar() {

  }

}
