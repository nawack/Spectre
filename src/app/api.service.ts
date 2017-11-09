import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthID } from '../AuthID';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;


@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public getAuthID(login: string, password: string): Observable<AuthID> {
    let params = new URLSearchParams();
    params.set('login', login);
    params.set('password', password);

    return this.http
      .post(API_URL + '/auth', params)
      .map(response => {
        return new AuthID(response.json());
      })
      .catch(this.handleError);
  }

}
