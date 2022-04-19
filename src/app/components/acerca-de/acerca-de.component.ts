import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/models/acerca-de';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers:[PorfolioService]
})
export class AcercaDeComponent implements OnInit {
  acercade:any;
  acercaDeList!:AcercaDe[];
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
  //  this.datosPorfolio.obtenerDatos().subscribe(data=>{
  //    this.acercade = data;
  //  });

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
