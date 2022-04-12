import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';
import { Educacion } from '../models/educacion';

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

 
  public getdatospersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/ver/persona`);
  }

  public getdatoseducacion():Observable<Educacion[]>{
   return this.http.get<Educacion[]>(`${this.apiServerUrl}/ver/estudios`);
 }

}
