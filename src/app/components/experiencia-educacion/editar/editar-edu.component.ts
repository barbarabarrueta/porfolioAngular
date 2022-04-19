import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {

  educacion!: Educacion;

  constructor(
    private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }


  ngOnInit(){ 
     const id = this.activatedRoute.snapshot.params['id'];
  this.porfolioservice.detalleeducacion(id).subscribe(
    data => {
      this.educacion = data;
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/']);
    }
  );
}

onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  this.porfolioservice.update(id, this.educacion).subscribe(
    data => {
      this.toastr.success('Educacion Actualizada', 'OK', {
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