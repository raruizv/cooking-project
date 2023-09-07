import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl= 'api/countries';

  constructor(
    private http: HttpClient,
  ) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }
}
