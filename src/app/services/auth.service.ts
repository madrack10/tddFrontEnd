import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
// import { User } from '@app/models';
import { User } from '../models/user.model';





@Injectable({ providedIn: 'root' })
export class AuthService {

    private httpOptions: any;
    // the actual JWT token
    public token: string;
    // the token expiration date
    public token_expires: Date;
    // the username of the logged in user
    public username: string;
    // error messages received from the login attempt
    public errors: any = [];


    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        // Microlog issues
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/rest-auth/login/`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }




    logout() {
        this.currentUserSubject.next(null);
        this.token = null;
        this.token_expires = null;
        this.username = null;
    }


    public refreshToken() {
        this.http.post('/api-token-refresh/', JSON.stringify({ token: this.currentUser }), this.httpOptions).subscribe(
            data => {
                console.log('refresh success', data);
                this.updateData(data['token']);
            },
            err => {
                console.error('refresh error', err);
                this.errors = err['error'];
            }
        );
    }


    private updateData(token) {
        this.token = token;
        this.errors = [];

        // decode the token to read the username and expiration timestamp
        const token_parts = this.token.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
    }


    public logout1() {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    }

}

