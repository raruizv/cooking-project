import { Component, OnInit } from '@angular/core';

//import { Recipe } from '../recipe';
import { RECIPES } from '../mock-entidades';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipes = RECIPES;
  constructor (private recipeService: RecipeService) { }

  ngOnInit() { 
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

}

