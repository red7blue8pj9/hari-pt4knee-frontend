import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})

export class VisualizationService {
    constructor(public httpService: HttpService) {
        // console.log(this.getDateCount());
    }

    public async getDateCountPerDay(): Promise<InputDataDTO> {
        // return new Promise<InputDataDTO>((resolve => {
        //   const a: InputDataDTO = {
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
        return await this.httpService.post(`vis/date_count_day`, {});
    }

    public async getDateCountPerMonth(): Promise<InputDataDTO> {
        // return new Promise<InputDataDTO>((resolve => {
        //   const a: InputDataDTO = {
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
        return await this.httpService.post(`vis/date_count_month`, {});
    }

    public async getDateCountPerYear(): Promise<InputDataDTO> {
        // return new Promise<InputDataDTO>((resolve => {
        //   const a: InputDataDTO = {
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
        return await this.httpService.post(`vis/date_count_year`, {});
    }

    public async getProcCate(): Promise<InputDataDTO> {
        // return new Promise<InputDataDTO>(resolve => {
        //     const a: InputDataDTO = {
        //         data: [
        //             {
        //                 "DISTINCT_STUDY_ID": 104,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Acupuncture"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 233,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Chiropractor/Osteo"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 41,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Integrative health referral"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 53,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Massage Therapy"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 330,
        //                 "KNEE_PROC_CATE": "DME",
        //                 "KNEE_PROC_SUBCATE": "Cane"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 97,
        //                 "KNEE_PROC_CATE": "DME",
        //                 "KNEE_PROC_SUBCATE": "Tens"
        //             }], ok: true
        //     };
        //     resolve(a);
        // });
        return await this.httpService.post(`vis/proc_cate`, {});
    }

    public async getProcSubCate(): Promise<InputDataDTO> {
        // return new Promise<InputDataDTO>((resolve => {
        //     const a: InputDataDTO = {
        //         data: [
        //             {
        //                 "DISTINCT_STUDY_ID": 104,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Acupuncture"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 233,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Chiropractor/Osteo"
        //             },
        //             {
        //                 "DISTINCT_STUDY_ID": 41,
        //                 "KNEE_PROC_CATE": "CAM/Integrative",
        //                 "KNEE_PROC_SUBCATE": "Integrative health referral"
        //             }
        //             ], ok: true
        //     };
        //     resolve(a);
        // }));
        return await this.httpService.post(`vis/proc_subcate`, {});
    }

    public async getLocEnc(): Promise<InputDataDTO> {
        return await this.httpService.post(`vis/location_enc`, {});
    }
}

export interface InputDataDTO {
    ok: boolean;
    data: DateCountJson[] | ProcCateJson[] | SubProcCateJson[] | LocEncJson[];
}

export interface DateCountJson {
    TIME: string;
    DISTINCT_VISIT_ID: number;
    DISTINCT_STUDY_ID: number;
    TOT_COLUMNS: number;
}

export interface ProcCateJson {
    KNEE_PROC_CATE: string;
    DISTINCT_STUDY_ID: number;
}

export interface SubProcCateJson {
    KNEE_PROC_CATE: string;
    KNEE_PROC_SUBCATE: string;
    DISTINCT_STUDY_ID: number;
}

export interface LocEncJson {
    LOCATION: string;
    START_DATE: string;
    VISITS: number;
}
