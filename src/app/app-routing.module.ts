import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './components/porfolio/porfolio.component'; 
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'porfolio', component:PorfolioComponent },
  { path:'login', component:LoginComponent },
  { path:'', redirectTo:'porfolio', pathMatch:'full' }
        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
