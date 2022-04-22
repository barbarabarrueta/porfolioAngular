import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './components/porfolio/porfolio.component'; 
import { LoginComponent } from './auth/login.component';
import { EditarEduComponent } from './components/experiencia-educacion/editar/editar-edu.component';
import { NuevoEduComponent } from './components/experiencia-educacion/nuevo/nuevo-edu.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';


const routes: Routes = [
  { path:'porfolio', component:PorfolioComponent },
  { path:'login', component:LoginComponent },
  { path:'editarEdu/:id', component:EditarEduComponent},
  { path:'newEdu', component:NuevoEduComponent},

  { path:'editarAcercaDe/:id', component:EditarAcercaDeComponent},

  { path:'', redirectTo:'porfolio', pathMatch:'full' }
        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
