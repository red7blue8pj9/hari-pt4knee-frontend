import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from "ng2-charts";
import {DataCountDTO} from "../../pages/visualization/visualization.component";
import {ProcCateJson} from "../../services/visualization/visualization.service";
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-vis-proc-cate',
    templateUrl: './vis-proc-cate.component.html',
    styleUrls: ['./vis-proc-cate.component.scss']
})
export class VisProcCateComponent implements OnInit, OnChanges {

    @Input() procCate: Label[] = [];
    @Input() procCateCounts: DataCountDTO[] = [];
    @Input() procSubCate: Label[] = [];
    @Input() procSubCateCounts: DataCountDTO[] = [];

    @Input() procData: ProcCateJson[];

    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'left',
            align: 'center'
        },
    };

    public pieChartType: ChartType = 'doughnut';
    public pieChartLegend = true;

    constructor() {
    }

    ngOnInit() {
        // console.log(this.procData.length);
    }

    highcharts = Highcharts;
    catePieChartOption: any;
    subcatePieChartOption: any;

    ngOnChanges(changes: SimpleChanges) {
        // console.dir(changes['procData']);
        let data = changes['procData'].currentValue;
        this.catePieChartOption = this.defaultOptions;
        this.catePieChartOption.series[0].data = data;

        data = changes['subcateData'].currentValue;
        this.subcatePieChartOption = this.defaultOptions;
        this.subcatePieChartOption.push({subtitle:{text:'Click the slices to view sub-categories.'}})
        this.catePieChartOption.series[0].data = data;
    }

    defaultOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Knee Procedure Category'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Distinct STUDY_IDs',
            colorByPoint: true,
            data: [],
        }]
    };


}
