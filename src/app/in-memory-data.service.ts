import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Eatery } from "./eatery";
import { Recipe } from "./recipe";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

    createDb() {
      const countries = [
        { name: 'Colombia' },
        { name: '' }, 
        { name: '' },
    ];
    
    const eateries = [
        { id: 1 ,name: 'Comedor Familiar del Tio Moe', city: 'Springfield', country: 'USA', stars: 4, attainment: "2023-12-01"},
        { id: 2, name: 'Central', city: 'Lima', country: 'Peru', stars: 5, attainment: "2023-07-20"},
        { id: 3, name: 'Mestizo Vegano', city: 'Bogota', country: 'Colombia', stars: null, attainment: null},
    ];
    
    const products = [
        {   name: 'Achiote',
            description: 'Esta semilla, de un tamaño de unos 3 milímetros de largo y de un color rojo o marrón, se usa fundamentalmente como colorante dado que su sabor es muy suave.',
            background: 'Con la colonización de los españoles, el uso del achiote se concentró únicamente en la gastronomía y los platillos, en los que destaca su participación son: la cochinita pibil, los codzitos yucatecos, vinagretas, arroz y tacos al pastor.',
            category: 'Condimento'},
        {   name: '',
            description: '',
            background: '',
            category: ''},
        {   name: '',
            description: '',
            background: '',
            category: ''},
    ];
    
    const recipes = [
        {   name: 'Sancocho Valluno',
            description: 'Sancocho valluno o sancocho de gallina, el cual tiene origen en la región del Valle del Cauca, y se ha popularizado en todo el país cafetero.',
            plateImage: '',
            makingProcess: '',
            video: ''},
        {   name: '',
            description: '',
            plateImage: '',
            makingProcess: '',
            video: ''},
        {   name: '',
            description: '',
            plateImage: '',
            makingProcess: '',
            video: ''},
    ];
    
    const schools = [
        {   name: 'Cocina Caribeña',
            description: 'La gastronomía caribeña es una de las más suculentas, sabrosas y coloridas por la variedad de platos que beben de distintas influencias internacionales. Todo turista debe degustar alguno de ellos puesto que tienen raíces europeas, indígenas y hasta africanas.' },
        {   name: '',
            description: '',},
        {   name: '',
            description: '',},
    ];
    return {countries, eateries, products, recipes, schools};    
  }

  genIdRecipe(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 1;
  }
  genId(eateries: Eatery[]): number {
    return eateries.length > 0 ? Math.max(...eateries.map(eatery => eatery.id)) + 1 : 1;
  }
}
