import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ApiGlobal } from '../models/global.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private baseUrl = 'http://127.0.0.1:8000/tddkApi/v1/?format=json';

  constructor(private http: Http) { }
  public getFilestream(): Promise<any> {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ApiGlobal)
      .catch(error => console.log('Une erreur est survenue ' + error));
  }
}
