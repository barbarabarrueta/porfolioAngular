import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers:[PorfolioService]
})
export class EncabezadoComponent implements OnInit {
  persona: Persona[] | undefined;
  miPorfolioImg:any;

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miPorfolioImg = data;
    });

    this.getdatos();
  }

    private getdatos(){
      this.datosPorfolio.getdatospersona().subscribe(
        (data:Persona[])=>{
          this.persona = data;
          console.log(this.persona)
        }
      )
    }


}
