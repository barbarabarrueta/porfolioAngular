import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SkillsProgramas } from 'src/app/models/skills-programas';

@Component({
  selector: 'app-nuevo-skillsprog',
  templateUrl: './nuevo-skillsprog.component.html',
  styleUrls: ['./nuevo-skillsprog.component.css']
})
export class NuevoSkillsprogComponent implements OnInit {
  id?: number;
  programa: string ='';
  porcentaje: string ='';
  
    constructor(private porfolioservice: PorfolioService,
    private toastr: ToastrService,
    private router: Router,
        ) {
        
        };
    
   

  ngOnInit(): void {
  }

    onCreate(): void{
      const skillprog = new SkillsProgramas(this.programa, this.porcentaje);
      this.porfolioservice.postnewskillsprogramas(skillprog).subscribe(
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
