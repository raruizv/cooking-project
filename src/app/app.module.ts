import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { SchoolsComponent } from './schools/schools.component';
import { CountriesComponent } from './countries/countries.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { EateriesComponent } from './eateries/eateries.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  declarations: [
    AppComponent,
    SchoolsComponent,
    CountriesComponent,
    ProductsComponent,
    RecipesComponent,
    EateriesComponent
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
