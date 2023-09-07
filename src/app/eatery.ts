//Propiedad stars es opcional, caso similar a Recipe

export interface Eatery {
    id: number;
    name: string;
    city: string;
    country: string;
    stars: number | null;
    attainment: string | null;
}