import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';
import { Educacion } from '../models/educacion';
import { AcercaDe } from '../models/acerca-de';
import { Experiencia } from '../models/experiencia';
import { Proyectos } from '../models/proyectos';
import { SkillsProgramas } from '../models/skills-programas';
import { SkillsIdiomas } from '../models/skills-idiomas';
import { SkillsHabilidades } from '../models/skills-habilidades';


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

 //comienzo servicio para ver los datos de los componentes
  public getdatospersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}ver/persona`);
  }
  public getdatoseducacion():Observable<Educacion[]>{
   return this.http.get<Educacion[]>(`${this.apiServerUrl}ver/estudios`);
  }
  public getdatosacercaDe():Observable<AcercaDe[]>{
  return this.http.get<AcercaDe[]>(`${this.apiServerUrl}ver/acercaDe`);
  }
  public getdatosexperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}ver/experiencia`);
  }
  public getdatosproyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}ver/proyectos`);
  }
  public getdatoskillprogramas():Observable<SkillsProgramas[]>{
    return this.http.get<SkillsProgramas[]>(`${this.apiServerUrl}ver/skillsprogramas`);
  }
  public getdatoskillidiomas():Observable<SkillsIdiomas[]>{
    return this.http.get<SkillsIdiomas[]>(`${this.apiServerUrl}ver/skillsidiomas`);
  }
  public getdatoskillhabilidades():Observable<SkillsHabilidades[]>{
    return this.http.get<SkillsHabilidades[]>(`${this.apiServerUrl}ver/skillshabilidades`);
  }
  //fin ver los datos

  //comienzo servicio para crear nuevos datos del porfolio
  public postneweducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/estudios`, educacion);
  }
  public postnewexperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/experiencia`, experiencia);
  }
  public postnewproyecto(proyectos:Proyectos):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/proyecto`, proyectos);
  }
  public postnewskillsprogramas(skillsprogramas:SkillsProgramas):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/skillsprogramas`, skillsprogramas);
  }
  public postnewskillsidiomas(skillsidiomas:SkillsIdiomas):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/skillsidiomas`, skillsidiomas);
  }
  public postnewskillshabilidades(skillshabilidades:SkillsHabilidades):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/skillshabilidades`, skillshabilidades);
  }
  //fin  del servicio para crear nuevos datos del porfolio

 
  //servicio para traer los datos del porfolio
  public detallepersona(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detallepersona/${id}`);
  }
  public detalleeducacion(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/${id}`);
  }
  public detalleacercade(id: number): Observable<any>{
     return this.http.get<any>(`${this.apiServerUrl}detalleacercade/${id}`);
  }
  public detalleexperiencia(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/experiencia/${id}`);
  }
  public detalleproyecto(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/proyecto/${id}`);
  }  
  public detalleskillsprogramas(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/skillsprogramas/${id}`);
  }  
  public detalleskillsidiomas(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/skillsidiomas/${id}`);
  } 
  public detalleskillshabilidades(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}detalle/skillshabilidades/${id}`);
  }
 // fin del servicio para traer los datos del porfolio


//servicio para actualizar los datos del porfolio
public updatepersona(id:number, persona: Persona):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/persona//${id}`, persona);
}
public updateeducacion(id:number, educacion: Educacion):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/estudios/${id}`, educacion);
}
public updateacercade(id:number, acercade: AcercaDe):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/acercaDe/${id}`, acercade);
}
public updateexperiencia(id:number, experiencia: Experiencia):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/experiencia/${id}`, experiencia);
}
public updateproyecto(id:number, proyectos: Proyectos):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/proyecto/${id}`, proyectos);
}
public updateskillsprogramas(id:number, skillsprogramas:SkillsProgramas):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/skillsprogramas/${id}`, skillsprogramas);
}
public updateskillsidiomas(id:number, skillsidiomas:SkillsIdiomas):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/skillsidiomas/${id}`, skillsidiomas);
}
public updateskillshabilidades(id:number, skillshabilidades:SkillsHabilidades):Observable<any>{
  return this.http.put<any>(`${this.apiServerUrl}editar/skillshabilidades/${id}`, skillshabilidades);
}
// fin del servicio para actualizar los datos del porfolio


//servicio para borrar los datos del porfolio
public deleteeducacion(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
}
public deleteacercade(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}deleteacercade/${id}`);
}
public deleteexperiencia(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/experiencia/${id}`);
}
public deleteproyecto(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/proyecto/${id}`);
}
public deleteskillsprogramas(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/skillsprogramas/${id}`);
}
public deleteskillsidiomas(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/skillsidiomas/${id}`);
}
public deleteskillshabilidades(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}delete/skillshabilidades/${id}`);
}
// fin del servicio par actualizar los datos del porfolio



}
