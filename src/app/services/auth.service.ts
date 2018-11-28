import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly rootUrl = 'http://127.0.0.1:8000';  // URL to web api
  constructor(private http: HttpClient) { }


  signInUser(user: User) {
    const body: User = {
      Username: user.Username,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    };
    const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/rest-auth/Registration', body, { headers: reqHeader });
  }

  // userAuthentication(userName, password) {
  //   const data = "username=" + userName + '&password=' + password + "&grant_type=password";
  //   const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
  //   return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  // }




}
