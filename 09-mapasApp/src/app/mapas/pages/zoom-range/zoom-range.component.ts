import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  // sirve para tomar un elemento html y utilizarlo como una propiedad comun y corriente
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 12;
  center: [number, number] = [ -58.45177388687359, -34.613840001673346 ];

  constructor() { }

  ngOnDestroy(): void {
    //debemos limpiar todos los listeners
    this.mapa.off('zoom', () => {} );
    this.mapa.off('zoommend', () => {} );
    this.mapa.off('move', () => {} );
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
      });

      //nivel de zoom del mapa
      this.mapa.on('zoom', (ev) => { this.zoomLevel = this.mapa.getZoom(); });

      // limitar el zoom del mapa
      this.mapa.on('zoommend', (ev) => { 
        if ( this.mapa.getZoom() > 18 ) {
          this.mapa.zoomTo( 18 );
        }
      });

      // movimiento del mapa
      this.mapa.on('move', (event) => {
        const target = event.target;
        const { lng, lat } = target.getCenter();
        this.center = [lng, lat];
      });
  }

  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn() {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio( valor: string ) {
    this.mapa.zoomTo( Number(valor) );

  }

}
