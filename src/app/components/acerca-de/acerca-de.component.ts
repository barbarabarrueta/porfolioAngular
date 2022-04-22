import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AcercaDe } from 'src/app/models/acerca-de';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers:[PorfolioService]
})
export class AcercaDeComponent implements OnInit {
 // acercade:any;
  acercaDeList!:AcercaDe[];
  isLogged:boolean= false;

  constructor(
         private datosPorfolio: PorfolioService,
         private tokenService: TokenService,
         private toastr: ToastrService,
         private router: Router) { }

  ngOnInit(): void {
   
    if(this.tokenService.getToken()){
      this.isLogged = true;
       }else{
         this.isLogged = false;
   };

  this.getdatosAcerca();

  }

  private getdatosAcerca(){
    this.datosPorfolio.getdatosacercaDe().subscribe(
      (data:AcercaDe[])=>{
        this.acercaDeList = data;
        console.log(this.acercaDeList)
      }
    )
  }



}
