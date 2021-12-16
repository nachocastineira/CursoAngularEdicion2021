import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color } from '../../../../../../04-pipesApp/src/app/ventas/interfaces/ventas.interfaces';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';


}
