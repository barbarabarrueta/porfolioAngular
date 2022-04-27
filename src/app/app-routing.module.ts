import { Component, NgModule } from '@angular/core';
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
import { NuevoSkillsprogComponent } from './components/aptitudes/nuevo/nuevo-skillsprog.component';
import { EditarSkillsProgComponent } from './components/aptitudes/editar/editar-skills-prog.component';
import { EditarPersonaComponent } from './components/encabezado/editar/editar-persona.component';
import { NuevoSkillsIdiomaComponent } from './components/aptitudes/nuevo/nuevo-skills-idioma.component';
import { EditarSkillsIdiomaComponent } from './components/aptitudes/editar/editar-skills-idioma.component';
import { NuevoSkillshabilComponent } from './components/aptitudes/nuevo/nuevo-skillshabil.component';
import { EditarSkillshabilComponent } from './components/aptitudes/editar/editar-skillshabil.component';

const routes: Routes = [
  { path:'porfolio', component:PorfolioComponent },
  { path:'login', component:LoginComponent },
  { path:'editarPersona/:id', component:EditarPersonaComponent},
  { path:'editarAcercaDe/:id', component:EditarAcercaDeComponent},

  { path:'newEdu', component:NuevoEduComponent},
  { path:'editarEdu/:id', component:EditarEduComponent},
  { path:'newExp', component:NuevoExpComponent},
  { path:'editarExp/:id', component:EditarExpComponent},
  
  { path:'newSkillsProg', component:NuevoSkillsprogComponent},
  { path:'editarSkillsProg/:id', component:EditarSkillsProgComponent},
  { path:'newSkillsIdioma', component:NuevoSkillsIdiomaComponent},
  { path:'editarSkillsIdioma/:id', component:EditarSkillsIdiomaComponent},
  { path:'newSkillsHabil', component:NuevoSkillshabilComponent},
  { path:'editarSkillsHabil/:id', component:EditarSkillshabilComponent}, 
  
  { path:'newProyec', component:NuevoProComponent},
  { path:'editarProyec/:id', component:EditarProComponent},

  { path:'', redirectTo:'porfolio', pathMatch:'full' }
        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
