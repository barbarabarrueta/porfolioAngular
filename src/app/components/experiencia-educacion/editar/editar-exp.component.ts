import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  experiencia!: Experiencia;
  id!: number;

  constructor(private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

    ngOnInit(){ 
      this.id = this.activatedRoute.snapshot.params['id'];
      this.porfolioservice.detalleexperiencia(this.id).subscribe(
        (data: Experiencia) => {
          this.experiencia = data;
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
      this.porfolioservice.updateexperiencia(this.id, this.experiencia).subscribe(
        data => {
          this.toastr.success('Experiencia Actualizada', 'OK', {
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
