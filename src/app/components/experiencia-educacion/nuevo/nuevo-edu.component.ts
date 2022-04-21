import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-nuevo-edu',
  templateUrl: './nuevo-edu.component.html',
  styleUrls: ['./nuevo-edu.component.css']
})
export class NuevoEduComponent implements OnInit {
    id?: number;
    school: string ='';
    img: string = '';
    title: string = '';
    career: string = '';
    start: string =  '';
    end: string = '';

  constructor(private porfolioservice: PorfolioService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const educacion = new Educacion(this.school, this.img, this.title, 
                                  this.career, this.start, this.end);
    this.porfolioservice.postneweducacion(educacion).subscribe(
         data=>{
           this.toastr.success('Educacion creado','OK',{
             timeOut: 3000, positionClass:'toast-top-center'
           });
          this.router.navigate(['/']);
         },
         err=>{
           this.toastr.error('error al crear nuevo estudio', 'Fail',{
             timeOut:3000, positionClass:'toast-top-center'
           });
           this.router.navigate(['/']);
         }
      );                        
    }

}
