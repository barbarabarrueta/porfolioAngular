import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsProgramas } from 'src/app/models/skills-programas';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-skills-prog',
  templateUrl: './editar-skills-prog.component.html',
  styleUrls: ['./editar-skills-prog.component.css']
})
export class EditarSkillsProgComponent implements OnInit {
    id!:number;
    programa!: SkillsProgramas;

  constructor(private porfolioservice: PorfolioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }


    ngOnInit(){ 
      this.id = this.activatedRoute.snapshot.params['id'];
      this.porfolioservice.detalleskillsprogramas(this.id).subscribe(
        (data: SkillsProgramas) => {
          this.programa = data;
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
      this.porfolioservice.updateskillsprogramas(this.id, this.programa).subscribe(
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
