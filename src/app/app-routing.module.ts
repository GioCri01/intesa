import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { StartSegnalazioneComponent } from './start-segnalazione/start-segnalazione.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"segnalazione",
    component:StartSegnalazioneComponent
  },
  {
    path:"admin",
    component:AdminPageComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
