import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
import { CountriesComponent } from './countries/countries.component';
import { EateriesComponent } from './eateries/eateries.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SchoolsComponent } from './schools/schools.component';
*/

const routes: Routes = [
  /*
  { path: 'paises', component: CountriesComponent },
  { path: 'restaurantes', component: EateriesComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'recetas', component: RecipesComponent },
  { path: 'culturas', component: SchoolsComponent }, 
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
