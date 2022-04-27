import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsIdiomas } from 'src/app/models/skills-idiomas';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nuevo-skills-idioma',
  templateUrl: './nuevo-skills-idioma.component.html',
  styleUrls: ['./nuevo-skills-idioma.component.css']
})
export class NuevoSkillsIdiomaComponent implements OnInit {
  id?: number;
  idioma: string ='';
  porcentaje: string ='';
  
    constructor(private porfolioservice: PorfolioService,
    private toastr: ToastrService,
    private router: Router,
        ) {
        
        };
    
   

  ngOnInit(): void {
  }

    onCreate(): void{
      const skillsidio = new SkillsIdiomas(this.idioma, this.porcentaje);
      this.porfolioservice.postnewskillsidiomas(skillsidio).subscribe(
           data=>{
             this.toastr.success('skills creado','OK',{
               timeOut: 3000, positionClass:'toast-top-center'
             });
            this.router.navigate(['/']);
           },
           err=>{
             this.toastr.error('error al crear nuevo skills', 'Fail',{
               timeOut:3000, positionClass:'toast-top-center'
             });
             this.router.navigate(['/']);
           }
        );                        
      }


}
