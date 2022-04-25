import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/models/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList!:Proyectos[];
  isLogged:boolean= false;

  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
    )
     {  }

  ngOnInit(): void {
   
   //saber si el usuario esta logeado
    if(this.tokenService.getToken()){
       this.isLogged = true;
        }else{
          this.isLogged = false;
    };


    this.getdatosproyec();
   
  
  }

   //traer los datos de proyecto
   private getdatosproyec(){
    this.datosPorfolio.getdatosproyectos().subscribe(
      (data:Proyectos[])=>{
        this.proyectosList = data;
        console.log(this.proyectosList)
      }
    );
  }
  
  //borrar item de proyecto
  borrarProyec(id: number){
    this.datosPorfolio.deleteproyecto(id).subscribe(
      data=>{
        this.toastr.success('proyecto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatosproyec();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }


}
