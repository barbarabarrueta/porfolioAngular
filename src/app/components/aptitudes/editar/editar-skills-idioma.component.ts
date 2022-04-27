import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsIdiomas } from 'src/app/models/skills-idiomas';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-skills-idioma',
  templateUrl: './editar-skills-idioma.component.html',
  styleUrls: ['./editar-skills-idioma.component.css']
})
export class EditarSkillsIdiomaComponent implements OnInit {
  id!:number;
  idioma!: SkillsIdiomas;

constructor(private porfolioservice: PorfolioService,
  private activatedRoute: ActivatedRoute,
  private toastr: ToastrService,
  private router: Router) { }


  ngOnInit(){ 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.porfolioservice.detalleskillsidiomas(this.id).subscribe(
      (data: SkillsIdiomas) => {
        this.idioma = data;
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
    this.porfolioservice.updateskillsidiomas(this.id, this.idioma).subscribe(
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