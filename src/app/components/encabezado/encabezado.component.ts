import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Persona } from 'src/app/models/persona';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers:[PorfolioService]
})

export class EncabezadoComponent implements OnInit {
  persona: Persona[] = [];
  miPorfolioImg:any;
  
  roles!: string[];
  isLogged = false;
  isAdmin = false

  constructor(private datosPorfolio: PorfolioService,
              private tokenService: TokenService,
              private router:Router
             ) { }

  ngOnInit() { 

    this.datosPorfolio.obtenerDatos().subscribe(data=>{
          this.miPorfolioImg = data;
        });

  /*  this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol === 'ROlE_ADMIN'){
        this.isAdmin = true;
      }
    });
  */
 
    this.getdatos();

    if(this.tokenService.getToken()){
      this.isLogged = true;
      return console.log(`${this.isLogged} + estas logeado`)
    }else{
      this.isLogged = false;
    };

  }

     private getdatos(){
      this.datosPorfolio.getdatospersona().subscribe(
        (data:Persona[])=>{
          this.persona = data;
          console.log(this.persona)
        }
      ) 
     };

    onLogOut():void{
      this.tokenService.logOut();
        window.location.reload();
      this.router.navigate(['/']);
    };


}
