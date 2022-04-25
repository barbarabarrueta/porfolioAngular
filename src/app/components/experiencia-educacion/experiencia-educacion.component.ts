import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { Experiencia } from 'src/app/models/experiencia';
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
  experienciaList!:Experiencia[];
  isLogged:boolean= false;

  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
    )
     {  }

  ngOnInit(): void {
    //  this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //    this.educacionList=data.education;
   //  });
   //  this.isUserLogged = this.authService.isUserLogged();
   
   //saber si el usuario esta logeado
    if(this.tokenService.getToken()){
       this.isLogged = true;
        }else{
          this.isLogged = false;
    };


    this.getdatosEdu();
    this.getdatosExp();
  
  }

 //traer los datos de educacion
  private getdatosEdu(){
    this.datosPorfolio.getdatoseducacion().subscribe(
      (data:Educacion[])=>{
        this.educacionList = data;
        console.log(this.educacionList)
      }
    );
  }
  
  //borrar item de educacion
  borrarEdu(id: number){
    this.datosPorfolio.deleteeducacion(id).subscribe(
      data=>{
        this.toastr.success('Educacion Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatosEdu();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  // traer los datos de experiencia
  private getdatosExp(){
    this.datosPorfolio.getdatosexperiencia().subscribe(
      (data:Experiencia[])=>{
        this.experienciaList = data;
        console.log(this.experienciaList)
      }
    );
  }
  // fin traer los datos

  // borrar un item de experiencia
  borrarExp(id: number){
    this.datosPorfolio.deleteexperiencia(id).subscribe(
      data=>{
        this.toastr.success('Experiencia Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatosExp();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  //fin de borrar un item de experiencia



}