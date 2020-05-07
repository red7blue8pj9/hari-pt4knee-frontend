import {Component, OnInit} from '@angular/core';
import {
    DateCountJson,
    ProcCateJson,
    ProcSubCateJson,
    VisualizationService
} from '../../services/visualization/visualization.service';
import {Label} from 'ng2-charts';

@Component({
    selector: 'app-visualization',
    templateUrl: './visualization.component.html',
    styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
    public dates: Label[] = [];
    public dateData: DataCountDTO[] = [];
    public months: Label[] = [];
    public monthData: DataCountDTO[] = [];
    public years: Label[] = [];
    public yearData: DataCountDTO[] = [];
    public procCate: Label[] = [];
    public procCateCounts: number[] = [];
    public procSubCate: Label[] = [];
    public procSubCateCounts: number[] = [];
    public procData: PieChartDTO[] = [];

    constructor(public visualizationService: VisualizationService) {

    }

    async ngOnInit() {
        await this.getDateCountData();
        await this.getProcCate();
    }

    async getDateCountData() {
        await this.visualizationService.getDateCountPerDay().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            processDateCountData(dataResult, this.dates, this.dateData);
            // console.log(this.dates);
            // console.log(this.dateData[0].data);
        });

        await this.visualizationService.getDateCountPerMonth().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            processDateCountData(dataResult, this.months, this.monthData);
            // console.log(this.months);
            // console.log(this.monthData[0].data);
        });
        await this.visualizationService.getDateCountPerYear().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            processDateCountData(dataResult, this.years, this.yearData);
            // console.log(this.years);
            // console.log(this.yearData[0].data);
        });
    }

    async getProcCate() {
        await this.visualizationService.getProcCate().then((dataObj: any) => {
            const dataResult: ProcCateJson[] = dataObj.data;
            dataResult.forEach(element => {
                const cur = element;
                this.procCate.push(cur.KNEE_PROC_CATE);
                this.procCateCounts.push(cur.DISTINCT_STUDY_ID);
            });
        });
        await this.visualizationService.getProcSubCate().then((dataObj: any) => {
            const dataResult: ProcSubCateJson[] = dataObj.data;
            dataResult.forEach(element => {
                const cur = element;
                this.procSubCate.push(cur.KNEE_PROC_SUBCATE);
                this.procSubCateCounts.push(cur.DISTINCT_STUDY_ID);
                this.procData.push({name: cur.KNEE_PROC_SUBCATE, y: cur.DISTINCT_STUDY_ID});
            });
        });
    }
}

function processDateCountData(inputData, xList, dataList) {
    const visitData: number[] = [];
    const studyData: number[] = [];
    const allData: number[] = [];
    inputData.forEach(element => {
        const cur = element;
        xList.push(cur.TIME);
        visitData.push(cur.DISTINCT_VISIT_ID);
        studyData.push(cur.DISTINCT_STUDY_ID);
        allData.push(cur.TOT_COLUMNS);
    });
    dataList.push({data: visitData, label: 'DISTINCT_VISIT_ID'});
    dataList.push({data: studyData, label: 'DISTINCT_STUDY_ID'});
    dataList.push({data: allData, label: 'TOT_COLUMNS'});
}

export interface DataCountDTO {
    label: string;
    data: number[];
}

export interface PieChartDTO {
    name: string;
    y: number;
}
