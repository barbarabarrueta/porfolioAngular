import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

//aca pongo la direccion donde estara la api
  url:string="http://npinti.ddns.net:9008/api/"
  //url es una variable tipo string

  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
    // llamamos a la api donde estan los datos en la base de datos
    //return this.http.get<any>(this.url + "persona");
  }
}
