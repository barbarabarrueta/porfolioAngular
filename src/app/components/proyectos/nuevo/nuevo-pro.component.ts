import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/models/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nuevo-pro',
  templateUrl: './nuevo-pro.component.html',
  styleUrls: ['./nuevo-pro.component.css']
})
export class NuevoProComponent implements OnInit {
  id?: number;
  titulo: string ='';
  link: string = '';
  descripcion: string = '';

  constructor(private porfolioservice: PorfolioService,
    private toastr: ToastrService,
    private router: Router
   ) { }

   ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.titulo, this.link, this.descripcion);
    this.porfolioservice.postnewproyecto(proyecto).subscribe(
         data=>{
           this.toastr.success('Proyecto creado','OK',{
             timeOut: 3000, positionClass:'toast-top-center'
           });
          this.router.navigate(['/']);
         },
         err=>{
           this.toastr.error('error al crear nuevo Proyecto', 'Fail',{
             timeOut:3000, positionClass:'toast-top-center'
           });
           this.router.navigate(['/']);
         }
      );                        
    }

}
