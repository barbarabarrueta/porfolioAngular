export class Persona {
    id?:number;
    nombre: string;
    apellido: string;
    ubicacion:string;
    img:string;
 

    constructor(nombre: string, apellido:string, ubicacion:string, img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = ubicacion;
        this.img = img;
    }
}
