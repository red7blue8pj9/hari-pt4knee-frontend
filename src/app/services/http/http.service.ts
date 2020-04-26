import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const apiRoot: string = environment.apiRoot;

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  post<T>(url: string, body: any): Promise<T> {
    return this.http.post<T>(`${apiRoot}/${url}`, body, httpOptions).toPromise();
  }

  get<T>(url: string): Promise<T> {
    return this.http.get<T>(`${apiRoot}/${url}`, httpOptions).toPromise();
  }
}

