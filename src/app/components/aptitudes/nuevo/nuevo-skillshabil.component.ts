import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillsHabilidades } from 'src/app/models/skills-habilidades';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nuevo-skillshabil',
  templateUrl: './nuevo-skillshabil.component.html',
  styleUrls: ['./nuevo-skillshabil.component.css']
})
export class NuevoSkillshabilComponent implements OnInit {
  id?: number;
  habilidades: string ='';
  porcentaje: string ='';

  constructor(private porfolioservice: PorfolioService,
    private toastr: ToastrService,
    private router: Router,
        ) {
        
        };
    
  ngOnInit(): void {
  }

  onCreate(): void{
    const skillhab = new SkillsHabilidades(this.habilidades, this.porcentaje);
    this.porfolioservice.postnewskillshabilidades(skillhab).subscribe(
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
