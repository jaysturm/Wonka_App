import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    post(route: string, postData: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(route, postData, options);
    }

    get(route: string): Observable<any> {
        return this.http.get(route);
    }
}