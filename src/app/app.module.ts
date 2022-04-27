import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { interceptorProvider, ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
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
import { EditarSkillsIdiomaComponent } from './components/aptitudes/editar/editar-skills-idioma.component';
import { NuevoSkillsIdiomaComponent } from './components/aptitudes/nuevo/nuevo-skills-idioma.component';
import { NuevoSkillshabilComponent } from './components/aptitudes/nuevo/nuevo-skillshabil.component';
import { EditarSkillshabilComponent } from './components/aptitudes/editar/editar-skillshabil.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaEducacionComponent,
    AptitudesComponent,
    ProyectosComponent,
    LoginComponent,
    PorfolioComponent,
    RegistroComponent,
    EditarEduComponent,
    NuevoEduComponent,
    EditarAcercaDeComponent,
    NuevoExpComponent,
    EditarExpComponent,
    EditarProComponent,
    NuevoProComponent,
    NuevoSkillsprogComponent,
    EditarSkillsProgComponent,
    EditarPersonaComponent,
    EditarSkillsIdiomaComponent,
    NuevoSkillsIdiomaComponent,
    NuevoSkillshabilComponent,
    EditarSkillshabilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [PorfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
