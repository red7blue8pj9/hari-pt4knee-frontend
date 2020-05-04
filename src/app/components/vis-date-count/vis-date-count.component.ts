import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {DataCountDTO} from '../../pages/visualization/visualization.component';

@Component({
  selector: 'app-vis-date-count',
  templateUrl: './vis-date-count.component.html',
  styleUrls: ['./vis-date-count.component.scss']
})
export class DateCountComponent implements OnInit {

  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartData: ChartDataSets[] =
  //   [
  //     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  //   ]
  // ;

  constructor() {
  }

  @Input() dates: Label[] = [];
  @Input() dateData: DataCountDTO[] = [];
  @Input() months: Label[] = [];
  @Input() monthData: DataCountDTO[] = [];
  @Input() years: Label[] = [];
  @Input() yearData: DataCountDTO[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {xAxes: [{}], yAxes: [{}]},
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  ngOnInit() {

  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

}
