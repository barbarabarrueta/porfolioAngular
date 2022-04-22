import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AcercaDe } from 'src/app/models/acerca-de';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {
  acercade!:AcercaDe;
  id!: number;

  constructor(
    private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
     this.porfolioservice.detalleacercade(this.id).subscribe(
       (data: AcercaDe) => {
         this.acercade = data;
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
  this.porfolioservice.updateacercade(this.id, this.acercade).subscribe(
    data => {
      this.toastr.success('Acerca de Actualizado', 'OK', {
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
