import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models';
import {environment} from '../../environments/environment';
import {config} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    })
};

const userRoot: string = environment.userRoot;

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<User[]>(`${userRoot}`, httpOptions);
    }

    register(user: User) {
        return this.http.post(`${userRoot}register`, user, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(`${userRoot}/${id}`, httpOptions);
    }
}
