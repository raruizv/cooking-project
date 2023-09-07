import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Eatery } from './eatery';


@Injectable({
  providedIn: 'root'
})
export class EateryService {

  private eateriesUrl= 'api/eateries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getEateries(): Observable<Eatery[]> {
    return this.http.get<Eatery[]>(this.eateriesUrl);
  }

  addEatery(eatery: Eatery): Observable<Eatery> {
    return this.http.post<Eatery>(this.eateriesUrl, eatery, this.httpOptions)
  }  

  deleteEatery(eatery: Eatery | number): Observable<Eatery> {
    
    const id = typeof eatery === 'number' ? eatery : eatery.id;    
    const url = `${this.eateriesUrl}/${id}`;
    
    return this.http.delete<Eatery>(url, this.httpOptions);
    
  }

  updateEatery(eatery: Eatery): Observable<any> {
    return this.http.put(this.eateriesUrl, eatery, this.httpOptions)
  }
}

