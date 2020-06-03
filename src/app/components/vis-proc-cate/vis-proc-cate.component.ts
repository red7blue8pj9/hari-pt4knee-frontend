import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {
    DataCountDTO,
    HighChartDTO,
    HighChartDrillDTO,
    HighChartDrillDownDTO
} from "../../pages/visualization/visualization.component";
import {ProcCateJson} from "../../services/visualization/visualization.service";
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';

More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';

Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
    selector: 'app-vis-proc-cate',
    templateUrl: './vis-proc-cate.component.html',
    styleUrls: ['./vis-proc-cate.component.scss']
})
export class VisProcCateComponent implements OnInit, OnChanges {

    @Input() procData: ProcCateJson[];
    @Input() subprocData: HighChartDTO[];
    @Input() subprocDrillData: HighChartDrillDownDTO[];

    constructor() {
    }

    ngOnInit() {
        // console.log(this.procData.length);
    }

    highChartOne = Highcharts;
    highChartTwo = Highcharts;
    catePieChartOption = {
        chart: undefined,
        title: undefined,
        tooltip: undefined,
        accessibility: undefined,
        plotOptions: undefined,
        series: undefined,
    };
    subcatePieChartOption = {
        chart: undefined,
        title: undefined,
        subtitle: undefined,
        accessibility: undefined,
        plotOptions: undefined,
        tooltip: undefined,
        series: undefined,
        drilldown: undefined,
    };

    ngOnChanges(changes: SimpleChanges) {
        // console.dir(changes['procData']);
        let procCateData = changes['procData'].currentValue;
        this.catePieChartOption.chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        };
        this.catePieChartOption.title = {
            text: 'Knee Procedure Category'
        };
        this.catePieChartOption.tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        this.catePieChartOption.accessibility = {
            point: {
                valueSuffix: '%'
            }
        };
        this.catePieChartOption.plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        };
        this.catePieChartOption.series = [{
            name: 'Distinct Study IDs',
            colorByPoint: true,
            data: procCateData
        }];


        let subprocCateData = changes['subprocData'].currentValue;
        this.subcatePieChartOption.chart = {
            type: 'pie'
        };
        this.subcatePieChartOption.title = {
            text: 'Knee Procedure Category with Sub-categories'
        };
        this.subcatePieChartOption.subtitle = {
            text: 'Click the slices to view versions.'
        };
        this.subcatePieChartOption.accessibility = {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        };
        this.subcatePieChartOption.plotOptions = {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        };
        this.subcatePieChartOption.tooltip = {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        };
        this.subcatePieChartOption.series = [
            {
                name: "Distinct Study IDs",
                colorByPoint: true,
                data: subprocCateData,
            }];
        this.subcatePieChartOption.drilldown = {series: this.subprocDrillData};


    }


}
