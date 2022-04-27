import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsHabilidades } from 'src/app/models/skills-habilidades';
import { SkillsIdiomas } from 'src/app/models/skills-idiomas';
import { SkillsProgramas } from 'src/app/models/skills-programas';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  programaslist:SkillsProgramas[]=[]; 
  idiomaslist:SkillsIdiomas[]=[]; 
  habilidadeslist:SkillsHabilidades[]=[]; 
  isLogged:boolean= false;

  constructor(
    private datosPorfolio: PorfolioService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
        ) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
       }else{
         this.isLogged = false;
   };

    this.getdatoskillprogramas();
    this.getdatoskillidiomas();
    this.getdatoskillhabilidades();

   }

   //metodo para traer la lista de programas
   private getdatoskillprogramas(){
    this.datosPorfolio.getdatoskillprogramas().subscribe(
      (data:SkillsProgramas[])=>{
        this.programaslist = data;
        console.log(this.programaslist)
      }
    );
  }
  //metodo para borrar un skill-programas
  borrarSkillProg(id: number){
    this.datosPorfolio.deleteskillsprogramas(id).subscribe(
      data=>{
        this.toastr.success('skills Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatoskillprogramas();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  //metodo para traer la lista de idiomas
  private getdatoskillidiomas(){
    this.datosPorfolio.getdatoskillidiomas().subscribe(
      (data:SkillsIdiomas[])=>{
        this.idiomaslist = data;
        console.log(this.idiomaslist)
      }
    );
  }
  //metodo para borrar un skill-idiomas
  borrarSkillIdioma(id: number){
    this.datosPorfolio.deleteskillsidiomas(id).subscribe(
      data=>{
        this.toastr.success('skills Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatoskillidiomas();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

   //metodo para traer la lista de habilidades blandas
   private getdatoskillhabilidades(){
    this.datosPorfolio.getdatoskillhabilidades().subscribe(
      (data:SkillsHabilidades[])=>{
        this.habilidadeslist = data;
        console.log(this.habilidadeslist)
      }
    );
  }
   //metodo para borrar una habilidad blanda
   borrarSkillhabil(id: number){
    this.datosPorfolio.deleteskillshabilidades(id).subscribe(
      data=>{
        this.toastr.success('skills Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getdatoskillhabilidades();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }



}
