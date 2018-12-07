import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
// import { User } from '@app/models';
import { User } from '../models/user.model';
import { Router } from '@angular/router';





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

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
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
                // login réussi si il y a un token JWT en réponse
                if (user && user.token) {
                    console.log('login réussi', user);
                    // stocke les détails de l'utilisateur et le token jwt dans le stockage local
                    // pour que l'utilisateur reste connecté entre les actualisations de la page
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    


}

 // this.token = null;
    // this.token_expires = null;
    // this.username = null;
    // this.router.navigate(['/home']);

// public refreshToken() {
//     this.http.post('/api-token-refresh/', JSON.stringify({ token: this.currentUser }), this.httpOptions).subscribe(
//         data => {
//             console.log('refresh success', data);
//             this.updateData(data['token']);
//         },
//         err => {
//             console.error('refresh error', err);
//             this.errors = err['error'];
//         }
//     );
// }


// private updateData(token) {
//     this.token = token;
//     this.errors = [];

//     // decode the token to read the username and expiration timestamp
//     const token_parts = this.token.split(/\./);
//     const token_decoded = JSON.parse(window.atob(token_parts[1]));
//     this.token_expires = new Date(token_decoded.exp * 1000);
//     this.username = token_decoded.username;
// }


// public logout1() {
//     this.token = null;
//     this.token_expires = null;
//     this.username = null;
// }

// public login1(user) {
//     this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
//         data => {
//             console.log('login success', data);
//             this.updateData(data['token']);
//         },
//         err => {
//             console.error('login error', err);
//             this.errors = err['error'];
//         }
//     );
// }


