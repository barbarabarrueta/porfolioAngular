import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {
 // educacionList:any; 
  educacionList!:Educacion[];
  constructor(private datosPorfolio: PorfolioService) {   
  }

  ngOnInit(): void {
    //  this.datosPorfolio.obtenerDatos().subscribe(data=>{
   //    this.educacionList=data.education;
  // });

    this.getdatosEdu();
  
  }

  private getdatosEdu(){
    this.datosPorfolio.getdatoseducacion().subscribe(
      (data:Educacion[])=>{
        this.educacionList = data;
        console.log(this.educacionList)
      }
    )
  }


}
