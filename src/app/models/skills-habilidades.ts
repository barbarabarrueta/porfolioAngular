export class SkillsHabilidades {
    id?:number;
    habilidades: string;
    porcentaje: string;

    constructor( habilidades: string, porcentaje:string){
        this.habilidades = habilidades;
        this.porcentaje = porcentaje;
        }
}

