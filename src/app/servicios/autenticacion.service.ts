import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 //  url="http://npinti.ddns.net:9008/api/auth/login";
   uri = 'https://localhost:3000/api'; // la url que corresponda en cada caso
   token:any;
   logeado: boolean = true;

   currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient, private router:Router) {
    console.log("el servicio de autenticación esta andando");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currrentUser')||'{}'))
   }

   IniciarSesion(credenciales:any):Observable<any>{
     return this.http.post(this.uri, credenciales).pipe(map(data=>{
       sessionStorage.setItem('currentUser', JSON.stringify(data));
       return data;
     }))
   }


    Login(usuario:string, password: string){
      this.http.post(this.uri + '/autenticate',{usuario:usuario, password:password})
      .subscribe((resp: any)=>{
        //redireccionamos el usuario al porfolio y guardamos el token
        this.router.navigate(['porfolio']);
        localStorage.setItem('auth_token', resp.token);
      });
      
    }
    

      logout(){
        localStorage.removeItem('token');
      }
      public get LogIn():boolean{
         return(localStorage.getItem('token')!==null);
      }


}
