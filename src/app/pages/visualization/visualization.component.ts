import {Component, OnInit} from '@angular/core';
import {DateCountJson, VisualizationService} from '../../services/visualization/visualization.service';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  private dates: Label[] = [];
  private dateData: DataCountDTO[] = [];
  private months: Label[] = [];
  private monthData: DataCountDTO[] = [];
  private years: Label[] = [];
  private yearData: DataCountDTO[] = [];


  constructor(public visualizationService: VisualizationService) {

  }

  async ngOnInit() {
    await this.getDateCountData();
  }

  async getDateCountData() {
    await this.visualizationService.getDateCountPerDay().then((dataObj: any) => {
      const dataResult: DateCountJson[] = dataObj.data;
      processInputData(dataResult, this.dates, this.dateData);
      console.log(this.dates);
      console.log(this.dateData[0].data);
    });

    await this.visualizationService.getDateCountPerMonth().then((dataObj: any) => {
      const dataResult: DateCountJson[] = dataObj.data;
      processInputData(dataResult, this.months, this.monthData);
      console.log(this.months);
      console.log(this.monthData[0].data);
    });
    await this.visualizationService.getDateCountPerYear().then((dataObj: any) => {
      const dataResult: DateCountJson[] = dataObj.data;
      processInputData(dataResult, this.years, this.yearData);
      console.log(this.years);
      console.log(this.yearData[0].data);
    });
  }
}

function processInputData(inputData, xList, dataList) {
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
