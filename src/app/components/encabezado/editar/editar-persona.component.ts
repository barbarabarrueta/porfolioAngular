import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  persona!: Persona;
  id!: number; 

  constructor(private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

    ngOnInit(){ 
      this.id = this.activatedRoute.snapshot.params['id'];
      this.porfolioservice.detallepersona(this.id).subscribe(
        (data: Persona) => {
          this.persona = data;
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
      //const id = this.activatedRoute.snapshot.params['id'];
      this.porfolioservice.updatepersona(this.id, this.persona).subscribe(
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
