import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EmblemProduct } from './emblemProduct';


@Injectable({
  providedIn: 'root'
})
export class EmblemproductService {
  
  private productsUrl= 'api/products';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<EmblemProduct[]> {
    return this.http.get<EmblemProduct[]>(this.productsUrl);
  }
}
