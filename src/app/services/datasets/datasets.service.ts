import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../../environments/environment';

const apiRoot: string = environment.apiRoot;


@Injectable({
    providedIn: 'root'
})
export class DatasetsService {

    constructor(public httpService: HttpService, private http: HttpClient) {
    }

    public async getDatasets(): Promise<DatasetDTO> {
        // return new Promise<DatasetDTO>((resolve) => {
        //   const a: DatasetDTO = {
        //     data: [
        //       {
        //         admin_user: 'jip45',
        //         create_time: 'Wed, 01 Jan 2020 00:00:00 GMT',
        //         id: 1,
        //         modified_time: 'Wed, 01 Apr 2020 00:00:00 GMT',
        //         restriction_level: 1,
        //         table_name: 'DIAGNOSES'
        //       },
        //       {
        //         admin_user: 'jip45',
        //         create_time: 'Wed, 01 Jan 2020 00:00:00 GMT',
        //         id: 2,
        //         modified_time: 'Wed, 01 Apr 2020 00:00:00 GMT',
        //         restriction_level: 1,
        //         table_name: 'PROCEDURE'
        //       }
        //     ],
        //     ok: true
        //   };
        //   resolve(a);
        // });
        return await this.httpService.post(`dataset/all`, {});
    }

    public downloadFile(fileName: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['data']['token'],
                }
            ),
            responseType: 'blob' as 'json',
        };
        return this.http.get<Blob>(`${apiRoot}/download/${fileName}`, httpOptions);
    }

}

export interface DatasetDTO {
    ok: boolean;
    data: DatasetJson[];
}

export interface DatasetJson {
    admin_user: string;
    create_time: string;
    id: number;
    modified_time: string;
    restriction_level: number;
    table_name: string;
}
