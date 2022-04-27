export class SkillsProgramas {
    id?:number;
    programa: string;
    porcentaje: string;

    constructor(programa: string, porcentaje:string){
        this.programa = programa;
        this.porcentaje = porcentaje;
        }

}
