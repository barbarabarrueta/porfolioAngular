import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

// este NOOOOOOOOOOOOOOOOOOOOOOOOOOOO
export class LoginComponent2 implements OnInit {
     form:FormGroup;
     constructor(private formBuilder:FormBuilder, private autenticationservice:AutenticacionService, private ruta:Router) { 
       this.form= this.formBuilder.group(
         {
         usuario:['',[Validators.required]],
         password:['',[Validators.required, Validators.minLength(3)]]
      }
      )
    }
     
  
  ngOnInit(): void {  }
   get usuario(){
    return this.form.get('usuario;');
  }
  
  get password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticationservice.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/porfolio']);
    })
  }
 
 
}
