import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/models/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-pro',
  templateUrl: './editar-pro.component.html',
  styleUrls: ['./editar-pro.component.css']
})
export class EditarProComponent implements OnInit {
  proyecto!: Proyectos;
  id!: number;

  constructor(
    private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }
 

  ngOnInit(){ 
     this.id = this.activatedRoute.snapshot.params['id'];
     this.porfolioservice.detalleproyecto(this.id).subscribe(
       (data: Proyectos) => {
         this.proyecto = data;
      },
      err => {
       this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
        });
     // this.router.navigate(['/']);
      }
     );
} 

onUpdate(): void {
  //const id = this.activatedRoute.snapshot.params['id'];
  this.porfolioservice.updateproyecto(this.id, this.proyecto).subscribe(
    data => {
      this.toastr.success('Proyecto Actualizado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/']);
    }
  );
}

}


