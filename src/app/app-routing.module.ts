import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './components/porfolio/porfolio.component'; 
import { LoginComponent } from './auth/login.component';
import { EditarEduComponent } from './components/experiencia-educacion/editar/editar-edu.component';
import { NuevoEduComponent } from './components/experiencia-educacion/nuevo/nuevo-edu.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { NuevoExpComponent } from './components/experiencia-educacion/nuevo/nuevo-exp.component';
import { EditarExpComponent } from './components/experiencia-educacion/editar/editar-exp.component';
import { EditarProComponent } from './components/proyectos/editar/editar-pro.component';
import { NuevoProComponent } from './components/proyectos/nuevo/nuevo-pro.component';

const routes: Routes = [
  { path:'porfolio', component:PorfolioComponent },
  { path:'login', component:LoginComponent },

  { path:'newEdu', component:NuevoEduComponent},
  { path:'editarEdu/:id', component:EditarEduComponent},
  { path:'newExp', component:NuevoExpComponent},
  { path:'editarExp/:id', component:EditarExpComponent},
  { path:'newProyec', component:NuevoProComponent},
  { path:'editarProyec/:id', component:EditarProComponent},

  { path:'editarAcercaDe/:id', component:EditarAcercaDeComponent},

  { path:'', redirectTo:'porfolio', pathMatch:'full' }
        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
