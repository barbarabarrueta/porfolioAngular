export class Experiencia {
    id?: number;
    empresa: string;
    puesto: string;
    descripcion: string;

    constructor(empresa: string, puesto:string, descripcion:string){
        this.empresa = empresa;
        this.puesto = puesto;
        this.descripcion = descripcion;
    }

}


