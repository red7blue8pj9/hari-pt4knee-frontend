import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {ColumnChartDTO, DataCountDTO} from '../../pages/visualization/visualization.component';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';

More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';

Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import {DateCountJson} from "../../services/visualization/visualization.service";
import {FormControl} from "@angular/forms";
// Initialize exporting module.
Exporting(Highcharts);

@Component({
    selector: 'app-vis-date-count',
    templateUrl: './vis-date-count.component.html',
    styleUrls: ['./vis-date-count.component.scss']
})

export class DateCountComponent implements OnInit, OnChanges {
    chart;
    updateFromSelection = false;
    chartConstructor = "chart";
    chartCallback;

    constructor() {
        const self = this;
        // saving chart reference using chart callback
        this.chartCallback = chart => {
            self.chart = chart;
        };
    }

    @Input() dates: Label[] = [];
    @Input() dateData: DataCountDTO[] = [];
    @Input() months: Label[] = [];
    @Input() monthData: DataCountDTO[] = [];
    @Input() years: Label[] = [];
    @Input() yearData: DataCountDTO[] = [];

    public dateLabel: string[] = [];
    public dateDatas: ColumnChartDTO[] = [];
    @Input() monthLabel: string[] = [];
    @Input() monthDatas: ColumnChartDTO[] = [];
    @Input() yearLabel: string[] = [];
    @Input() yearDatas: ColumnChartDTO[] = [];

    @Input() dateOriginal: DateCountJson[];

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

    highChart = Highcharts;
    yearColumnChartOption = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Numbers of Encounters Per Year'
        },
        xAxis: {
            categories: this.yearLabel,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers of Encounters'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: undefined,
    }
    monthColumnChartOption = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Numbers of Encounters Per Month'
        },
        xAxis: {
            categories: this.monthLabel,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers of Encounters'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: undefined,
    }
    dateColumnChartOption = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Numbers of Encounters Per Day'
        },
        xAxis: {
            categories: [],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers of Encounters'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: undefined,
    }
    selectYear: string;
    selectMonth: string;
    yearOptions: string[] = ['2016', '2017', '2018'];
    monthOptions: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];


    ngOnChanges(changes: SimpleChanges) {
        // console.dir(changes['procData']);
        // let procCateData = changes['yearData'].currentValue;
        this.yearColumnChartOption.series = this.yearDatas;
        this.yearColumnChartOption.xAxis.categories = this.yearLabel;
        this.monthColumnChartOption.series = this.monthDatas;
        this.monthColumnChartOption.xAxis.categories = this.monthLabel;
        const visitData: number[] = [];
        const studyData: number[] = [];
        const allData: number[] = [];
        let data = this.dateOriginal;
        if (data) {
            data.forEach(element => {
                this.dateLabel.push(element.TIME);
                visitData.push(element.DISTINCT_VISIT_ID);
                studyData.push(element.DISTINCT_STUDY_ID);
                allData.push(element.TOT_COLUMNS);
            });
            this.dateDatas.push({data: visitData, name: 'DISTINCT_VISIT_ID'});
            this.dateDatas.push({data: studyData, name: 'DISTINCT_STUDY_ID'});
            this.dateDatas.push({data: allData, name: 'TOT_NUMBERS'});
        }
        this.dateColumnChartOption.series = this.dateDatas;
        this.dateColumnChartOption.xAxis.categories = this.dateLabel;
    }

    selectYearDataInDates(year, month) {
        // build time
        let pick;
        if (month) {
            pick = year + '-' + month;
        } else {
            pick = year;
        }
        // construct data
        const visitData: number[] = [];
        const studyData: number[] = [];
        const allData: number[] = [];
        this.dateLabel = [];
        this.dateDatas = [];
        this.dateOriginal.forEach(element => {
            if (element.TIME.includes(pick)) {
                this.dateLabel.push(element.TIME);
                visitData.push(element.DISTINCT_VISIT_ID);
                studyData.push(element.DISTINCT_STUDY_ID);
                allData.push(element.TOT_COLUMNS);
            }
        });
        this.dateDatas.push({data: visitData, name: 'DISTINCT_VISIT_ID'});
        this.dateDatas.push({data: studyData, name: 'DISTINCT_STUDY_ID'});
        this.dateDatas.push({data: allData, name: 'TOT_NUMBERS'});

        const self = this,
            chart = this.chart;
        chart.showLoading();

        setTimeout(() => {
            chart.hideLoading();
            self.dateColumnChartOption.series = null;
            self.dateColumnChartOption.xAxis.categories = null;
            self.dateColumnChartOption.series = this.dateDatas;
            self.dateColumnChartOption.xAxis.categories = this.dateLabel;
            self.updateFromSelection = true;
        }, 100);

    }
}

