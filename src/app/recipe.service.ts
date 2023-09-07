import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Recipe } from './recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl= 'api/recipes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  addEatery(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions)
  }  

  deleterecipe(recipe: Recipe | number): Observable<Recipe> {
    
    const id = typeof recipe === 'number' ? recipe : recipe.id;    
    const url = `${this.recipesUrl}/${id}`;
    
    return this.http.delete<Recipe>(url, this.httpOptions);
    
  }

  updaterecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions)
  }
}
