import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Observable, of } from 'rxjs';
import { Offre } from '../models/offre.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private offerUrl = 'http://localhost:8000/tddkApi/v1/offres?format=json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET Offre from the server */
  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.offerUrl)
      .pipe(
        tap(_ => console.log('ok'), _ => this.log('fetched offers')),
        catchError(this.handleError('getOffres', []))
      );
  }


  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a Offres message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OffreService: ${message}`);
  }
}


