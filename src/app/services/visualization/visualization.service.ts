import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {DatasetDTO} from '../datasets/datasets.service';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  constructor(public httpService: HttpService) {
    // console.log(this.getDateCount());
  }

  public async getDateCountPerDay(): Promise<DateCountDTO> {
    // return new Promise<DateCountDTO>((resolve => {
    //   const a: DateCountDTO = {
    //     data: [
    //       {
    //         DISTINCT_STUDY_ID: 6875,
    //         DISTINCT_VISIT_ID: 14900,
    //         START_DATE: '2000-01-01',
    //         TOT_COLUMNS: 14900
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4740,
    //         DISTINCT_VISIT_ID: 9046,
    //         START_DATE: '2000-01-02',
    //         TOT_COLUMNS: 9046
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 7449,
    //         DISTINCT_VISIT_ID: 16463,
    //         START_DATE: '2000-01-03',
    //         TOT_COLUMNS: 16463
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 5350,
    //         DISTINCT_VISIT_ID: 10829,
    //         START_DATE: '2000-01-04',
    //         TOT_COLUMNS: 10829
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4822,
    //         DISTINCT_VISIT_ID: 9161,
    //         START_DATE: '2000-01-05',
    //         TOT_COLUMNS: 9161
    //       }], ok: true
    //   };
    //   resolve(a);
    // }));
    return await this.httpService.get(`vis/date_count_day`);
  }

  public async getDateCountPerMonth(): Promise<DatasetDTO> {
    // return new Promise<DateCountDTO>((resolve => {
    //   const a: DateCountDTO = {
    //     data: [
    //       {
    //         DISTINCT_STUDY_ID: 6875,
    //         DISTINCT_VISIT_ID: 14900,
    //         START_DATE: '2000-01',
    //         TOT_COLUMNS: 14900
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4740,
    //         DISTINCT_VISIT_ID: 9046,
    //         START_DATE: '2000-02',
    //         TOT_COLUMNS: 9046
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 7449,
    //         DISTINCT_VISIT_ID: 16463,
    //         START_DATE: '2000-03',
    //         TOT_COLUMNS: 16463
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 5350,
    //         DISTINCT_VISIT_ID: 10829,
    //         START_DATE: '2000-04',
    //         TOT_COLUMNS: 10829
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4822,
    //         DISTINCT_VISIT_ID: 9161,
    //         START_DATE: '2000-05',
    //         TOT_COLUMNS: 9161
    //       }], ok: true
    //   };
    //   resolve(a);
    // }));
    return await this.httpService.get(`vis/date_count_month`);
  }

  public async getDateCountPerYear(): Promise<DateCountDTO> {
    // return new Promise<DateCountDTO>((resolve => {
    //   const a: DateCountDTO = {
    //     data: [
    //       {
    //         DISTINCT_STUDY_ID: 6875,
    //         DISTINCT_VISIT_ID: 14900,
    //         START_DATE: '2000',
    //         TOT_COLUMNS: 14900
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4740,
    //         DISTINCT_VISIT_ID: 9046,
    //         START_DATE: '2001',
    //         TOT_COLUMNS: 9046
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 7449,
    //         DISTINCT_VISIT_ID: 16463,
    //         START_DATE: '2002',
    //         TOT_COLUMNS: 16463
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 5350,
    //         DISTINCT_VISIT_ID: 10829,
    //         START_DATE: '2003',
    //         TOT_COLUMNS: 10829
    //       },
    //       {
    //         DISTINCT_STUDY_ID: 4822,
    //         DISTINCT_VISIT_ID: 9161,
    //         START_DATE: '2004',
    //         TOT_COLUMNS: 9161
    //       }], ok: true
    //   };
    //   resolve(a);
    // }));
    return await this.httpService.get(`vis/date_count_year`);
  }

}

export interface DateCountDTO {
  ok: boolean;
  data: DateCountJson[];
}

export interface DateCountJson {
  TIME: string;
  DISTINCT_VISIT_ID: number;
  DISTINCT_STUDY_ID: number;
  TOT_COLUMNS: number;
}





