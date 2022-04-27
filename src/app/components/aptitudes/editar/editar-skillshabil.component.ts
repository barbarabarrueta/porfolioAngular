import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsHabilidades } from 'src/app/models/skills-habilidades';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-skillshabil',
  templateUrl: './editar-skillshabil.component.html',
  styleUrls: ['./editar-skillshabil.component.css']
})
export class EditarSkillshabilComponent implements OnInit {
  id!:number;
  habilidades!: SkillsHabilidades;

constructor(private porfolioservice: PorfolioService,
  private activatedRoute: ActivatedRoute,
  private toastr: ToastrService,
  private router: Router) { }

  ngOnInit(){ 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.porfolioservice.detalleskillshabilidades(this.id).subscribe(
      (data: SkillsHabilidades) => {
        this.habilidades = data;
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
    this.porfolioservice.updateskillshabilidades(this.id, this.habilidades).subscribe(
      data => {
        this.toastr.success('skills Actualizada', 'OK', {
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
