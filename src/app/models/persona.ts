export class Persona {
    id?:number;
    nombre: string;
    apellido: string;
    ubicacion:string;


    constructor(nombre: string, apellido:string, ubicacion:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = ubicacion;
    }
}
