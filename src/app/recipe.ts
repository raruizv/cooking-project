//Propiedad video es opcional, ¿cómo se hace esto, el recurso?

export interface Recipe{
    id: number;
    name: string;
    description: string;
    plateImage: string;
    makingProcess: string;
    video: string | null;
}