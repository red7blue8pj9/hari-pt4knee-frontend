import {Component, Input, OnInit} from '@angular/core';
import {
    DateCountJson,
    ProcCateJson,
    SubProcCateJson,
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

    public dateLabel = [];
    public dateDatas: ColumnChartDTO[] = [];
    public monthLabel = [];
    public monthDatas: ColumnChartDTO[] = [];
    public yearLabel = [];
    public yearDatas: ColumnChartDTO[] = [];
    public dateOriginal: DateCountJson[];

    public procData: HighChartDTO[] = [];
    public subprocData: HighChartDrillDTO[] = [];
    public subprocDrillData: HighChartDrillDownDTO[] = [];

    constructor(public visualizationService: VisualizationService) {

    }

    async ngOnInit() {
        await this.getDateCountData();
        await this.getProcCate();
    }

    async getDateCountData() {
        await this.visualizationService.getDateCountPerDay().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            // console.log(dataResult);
            processDateCountData(dataResult, this.dates, this.dateData);
            // console.log(this.dates);
            // console.log(this.dateData[0].data);
            const visitData: number[] = [];
            const studyData: number[] = [];
            const allData: number[] = [];
            dataResult.forEach(element => {
                this.dateLabel.push(element.TIME);
                visitData.push(element.DISTINCT_VISIT_ID);
                studyData.push(element.DISTINCT_STUDY_ID);
                allData.push(element.TOT_COLUMNS);
            });
            this.dateDatas.push({data: visitData, name: 'DISTINCT_VISIT_ID'});
            this.dateDatas.push({data: studyData, name: 'DISTINCT_STUDY_ID'});
            this.dateDatas.push({data: allData, name: 'TOT_NUMBERS'});
            // day info
            this.dateOriginal = dataResult;
        });

        await this.visualizationService.getDateCountPerMonth().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            processDateCountData(dataResult, this.months, this.monthData);
            // console.log(this.months);
            // console.log(this.monthData[0].data);
            const visitData: number[] = [];
            const studyData: number[] = [];
            const allData: number[] = [];
            dataResult.forEach(element => {
                this.monthLabel.push(element.TIME);
                visitData.push(element.DISTINCT_VISIT_ID);
                studyData.push(element.DISTINCT_STUDY_ID);
                allData.push(element.TOT_COLUMNS);
            });
            this.monthDatas.push({data: visitData, name: 'DISTINCT_VISIT_ID'});
            this.monthDatas.push({data: studyData, name: 'DISTINCT_STUDY_ID'});
            this.monthDatas.push({data: allData, name: 'TOT_NUMBERS'});
        });
        await this.visualizationService.getDateCountPerYear().then((dataObj: any) => {
            const dataResult: DateCountJson[] = dataObj.data;
            processDateCountData(dataResult, this.years, this.yearData);
            // console.log(this.years);
            // console.log(this.yearData[0].data);

            const visitData: number[] = [];
            const studyData: number[] = [];
            const allData: number[] = [];
            dataResult.forEach(element => {
                this.yearLabel.push(element.TIME);
                visitData.push(element.DISTINCT_VISIT_ID);
                studyData.push(element.DISTINCT_STUDY_ID);
                allData.push(element.TOT_COLUMNS);
            });
            this.yearDatas.push({data: visitData, name: 'DISTINCT_VISIT_ID'});
            this.yearDatas.push({data: studyData, name: 'DISTINCT_STUDY_ID'});
            this.yearDatas.push({data: allData, name: 'TOT_NUMBERS'});
            // console.log(this.yearLabel);
            // console.log(this.yearDatas);
        });
    }

    async getProcCate() {
        await this.visualizationService.getProcCate().then((dataObj: any) => {
            const dataResult: ProcCateJson[] = dataObj.data;
            dataResult.forEach(ele => {
                this.procData.push({name: ele.KNEE_PROC_CATE, y: ele.DISTINCT_STUDY_ID});
            });
            // console.log(this.procData);
        });
        await this.visualizationService.getProcSubCate().then((dataObj: any) => {
            const dataResult: SubProcCateJson[] = dataObj.data;
            // console.log(dataResult);

            let procListData = new Map();
            let subprocListData = new Map();
            dataResult.forEach(ele => {
                if (procListData.has(ele.KNEE_PROC_CATE)) {
                    procListData.set(ele.KNEE_PROC_CATE, procListData.get(ele.KNEE_PROC_CATE) + ele.DISTINCT_STUDY_ID);
                } else {
                    procListData.set(ele.KNEE_PROC_CATE, ele.DISTINCT_STUDY_ID);
                }
                if (subprocListData.has(ele.KNEE_PROC_CATE)) {
                    let tmp = subprocListData.get(ele.KNEE_PROC_CATE)
                    tmp.push([ele.KNEE_PROC_SUBCATE, ele.DISTINCT_STUDY_ID]);
                    subprocListData.set(ele.KNEE_PROC_CATE, tmp);
                } else {
                    let tmp = [];
                    tmp.push([ele.KNEE_PROC_SUBCATE, ele.DISTINCT_STUDY_ID])
                    subprocListData.set(ele.KNEE_PROC_CATE, tmp);
                }
            });
            for (let [key, value] of procListData) {
                this.subprocData.push({name: key, y: value, drilldown: key});
            }
            for (let [key, value] of subprocListData) {
                this.subprocDrillData.push({name: key, id: key, data: value});
            }
            // console.log(this.subprocData);
            // console.log(this.subprocDrillData);
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

export interface HighChartDTO {
    name: string;
    y: number;
}

export interface ColumnChartDTO {
    name: string;
    data: number[];
}

export interface HighChartDrillDTO {
    name: string;
    y: number;
    drilldown: string;
}

export interface HighChartDrillDownDTO {
    name: string;
    id: string;
    data: drillDownElement[];
}

export interface drillDownElement {
    array;
}
