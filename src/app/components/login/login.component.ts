import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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
