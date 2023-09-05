import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { CountriesComponent } from './countries/countries.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { EateriesComponent } from './eateries/eateries.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    CountriesComponent,
    ProductsComponent,
    RecipesComponent,
    EateriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
