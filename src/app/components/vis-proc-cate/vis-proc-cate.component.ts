import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from "ng2-charts";
import {DataCountDTO} from "../../pages/visualization/visualization.component";

@Component({
    selector: 'app-vis-proc-cate',
    templateUrl: './vis-proc-cate.component.html',
    styleUrls: ['./vis-proc-cate.component.scss']
})
export class VisProcCateComponent implements OnInit {

    @Input() procCate: Label[] = [];
    @Input() procCateCounts: DataCountDTO[] = [];
    @Input() procSubCate: Label[] = [];
    @Input() procSubCateCounts: DataCountDTO[] = [];

    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'left',
        },
    };

    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;

    constructor() {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    ngOnInit() {
    }

    // events
    public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
