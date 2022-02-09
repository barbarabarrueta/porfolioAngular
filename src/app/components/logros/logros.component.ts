import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  programasList:any;
  constructor(private datosPorfolio: PorfolioService) {   
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
        this.programasList=data.programas;
    })
  }

}
