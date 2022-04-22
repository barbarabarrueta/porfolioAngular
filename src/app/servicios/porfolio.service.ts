import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';
import { Educacion } from '../models/educacion';
import { AcercaDe } from '../models/acerca-de';


@Injectable({providedIn: 'root'})
export class PorfolioService {

   //aca pongo la direccion donde estara la api
   // url:string="http://npinti.ddns.net:9008/api/"
  //url:string = 'http://localhost:8080/';
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{
     return this.http.get('./assets/data/data.json');
  }

 //servicio para ver los datos de los componentes
  public getdatospersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}ver/persona`);
  }
  public getdatoseducacion():Observable<Educacion[]>{
   return this.http.get<Educacion[]>(`${this.apiServerUrl}ver/estudios`);
  }
  public getdatosacercaDe():Observable<AcercaDe[]>{
  return this.http.get<AcercaDe[]>(`${this.apiServerUrl}ver/acercaDe`);
  }


  //servicio para crear nuevos datos del porgolio
  public postneweducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/estudios`, educacion);
  }


  //servicio para traer los datos del porfolio
  public detalleeducacion(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/${id}`);
  }
  public detalleacercade(id: number): Observable<any>{
     return this.http.get<any>(`${this.apiServerUrl}detalleacercade/${id}`);
  }



//servicio para actualizar los datos del porfolio
public updateeducacion(id:number, educacion: Educacion):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/estudios/${id}`, educacion);
}
public updateacercade(id:number, acercade: AcercaDe):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/acercaDe/${id}`, acercade);
}



//servicio para borrar los datos del porfolio
public deleteeducacion(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
}
public deleteacercade(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}deleteacercade/${id}`);
}



}
