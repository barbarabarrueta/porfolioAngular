import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {
 // educacionList:any; 
  educacionList!:Educacion[];
  isLogged:boolean= false;

  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService,
    private router:Router
    )
     {  }

  ngOnInit(): void {
    //  this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //    this.educacionList=data.education;
   //  });
   //  this.isUserLogged = this.authService.isUserLogged();
   
    if(this.tokenService.getToken()){
       this.isLogged = true;
        }else{
          this.isLogged = false;
    };


    this.getdatosEdu();
  
  }

  private getdatosEdu(){
    this.datosPorfolio.getdatoseducacion().subscribe(
      (data:Educacion[])=>{
        this.educacionList = data;
        console.log(this.educacionList)
      }
    );
  }


}
