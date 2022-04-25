import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nuevo-exp',
  templateUrl: './nuevo-exp.component.html',
  styleUrls: ['./nuevo-exp.component.css']
})
export class NuevoExpComponent implements OnInit {
  id?: number;
  empresa: string ='';
  puesto: string = ''; 
  descripcion: string = '';

  constructor(private porfolioservice: PorfolioService,
               private toastr: ToastrService,
               private router: Router
              ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.empresa, this.puesto, this.descripcion);
    this.porfolioservice.postnewexperiencia(experiencia).subscribe(
         data=>{
           this.toastr.success('Experiencia creada','OK',{
             timeOut: 3000, positionClass:'toast-top-center'
           });
          this.router.navigate(['/']);
         },
         err=>{
           this.toastr.error('error al crear nueva expereincia', 'Fail',{
             timeOut:3000, positionClass:'toast-top-center'
           });
           this.router.navigate(['/']);
         }
      );                        
    }



}
