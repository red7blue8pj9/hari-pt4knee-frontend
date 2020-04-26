import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {

  constructor(public httpService: HttpService) {
  }

  public async getDatasets(): Promise<DatasetDTO> {
    return new Promise<DatasetDTO>((resolve) => {
      const a: DatasetDTO = {
        data: [
          {
            admin_user: 'jip45',
            create_time: 'Wed, 01 Jan 2020 00:00:00 GMT',
            id: 1,
            modified_time: 'Wed, 01 Apr 2020 00:00:00 GMT',
            restriction_level: 1,
            table_name: 'DIAGNOSES'
          },
          {
            admin_user: 'jip45',
            create_time: 'Wed, 01 Jan 2020 00:00:00 GMT',
            id: 2,
            modified_time: 'Wed, 01 Apr 2020 00:00:00 GMT',
            restriction_level: 1,
            table_name: 'DIAGNOSES'
          }
        ],
        ok: true
      };
      resolve(a);
    });
    return await this.httpService.post(`table/all`, {});
  }
}

export interface DatasetDTO {

  ok: boolean;
  data: TableDTO[];
}

export interface TableDTO {
  admin_user: string;
  create_time: string;
  id: number;
  modified_time: string;
  restriction_level: number;
  table_name: string;
}
