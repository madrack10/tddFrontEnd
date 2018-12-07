import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domaine } from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainesService {
  private domaineUrl = `${environment.apiUrl}/tddkApi/v1/domaines/`;

  constructor(private http: HttpClient) { }

  getAllDomaine() {
    return this.http.get<Domaine[]>(`${this.domaineUrl}?format=json`);
  }


}
