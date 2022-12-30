import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StartSegnalazioneComponent } from './start-segnalazione/start-segnalazione.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DettagliSegnalazioneComponent } from './dettagli-segnalazione/dettagli-segnalazione.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartSegnalazioneComponent,
    AdminPageComponent,
    HeaderComponent,
    FooterComponent,
    DettagliSegnalazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
