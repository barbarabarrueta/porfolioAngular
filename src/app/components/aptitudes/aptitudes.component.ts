import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';



@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  programasList:any;
  constructor(private datosPorfolio: PorfolioService) {   
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
        this.programasList=data.programas;
    })
  }


}
