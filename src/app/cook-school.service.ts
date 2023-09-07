import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { catchError, map, tap} from 'rxjs/operators';

import { CookSchool } from './cookSchool';

@Injectable({
  providedIn: 'root'
})
export class CookSchoolService {

  private schoolsUrl = 'api/schools';

  constructor(
    private http: HttpClient,    
  ) { }

  getSchools(): Observable<CookSchool[]> {
    return this.http.get<CookSchool[]>(this.schoolsUrl)
    /*
      .pipe(
        tap(_ => this.log('fetched schools')),
        catchError(this.handleError<CookSchool[]>('getSchools', []))
      );
    */
  }  
  /*
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  }
  */
}
