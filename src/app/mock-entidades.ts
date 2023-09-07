import { Country } from "./country";
import { Eatery } from "./eatery";
import { EmblemProduct } from "./emblemProduct";
import { Recipe } from "./recipe";
import { CookSchool } from "./cookSchool";

export const COUNTRIES: Country[] = [
    { name: 'Colombia' },
    { name: '' }, 
    { name: '' },
];

export const EATERIES: Eatery[] = [
    { id: 1, name: 'Comedor Familiar del Tio Moe', city: 'Springfield', country: 'USA', stars: 4, attainment: "2023-12-01"},
    { id: 2, name: 'Central', city: 'Lima', country: 'Peru', stars: 5, attainment: "2023-07-20"},
    { id: 3, name: 'Mestizo Vegano', city: 'Bogota', country: 'Colombia', stars: null, attainment: null},
];

export const PRODUCTS: EmblemProduct[] = [
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

export const RECIPES: Recipe[] = [
    {   id: 1,
        name: 'Sancocho Valluno',
        description: 'Sancocho valluno o sancocho de gallina, el cual tiene origen en la región del Valle del Cauca, y se ha popularizado en todo el país cafetero.',
        plateImage: '',
        makingProcess: '',
        video: ''},
    {   id: 2,
        name: '',
        description: '',
        plateImage: '',
        makingProcess: '',
        video: ''},
    {   id: 3,
        name: '',
        description: '',
        plateImage: '',
        makingProcess: '',
        video: ''},
];

export const SCHOOLS: CookSchool[] = [
    {   name: 'Cocina Caribeña',
        description: 'La gastronomía caribeña es una de las más suculentas, sabrosas y coloridas por la variedad de platos que beben de distintas influencias internacionales. Todo turista debe degustar alguno de ellos puesto que tienen raíces europeas, indígenas y hasta africanas.' },
    {   name: '',
        description: '',},
    {   name: '',
        description: '',},
];


