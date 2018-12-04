import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
// import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NewletterComponent } from './footer/newletter/newletter.component';
import { SearchformComponent } from './headers/searchform/searchform.component';
import { MainraisedComponent } from './content/mainraised/mainraised.component';
import { AccueilComponent } from './headers/accueil/accueil.component';
import { OffresListComponent } from './offres-list/offres-list.component';
import { SingleOffreComponent } from './offres-list/single-offre/single-offre.component';
import { FormOffreComponent } from './offres-list/form-offre/form-offre.component';
import { PanelComponent } from './content/panel/panel.component';
import { HomeComponent } from './home/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AlertComponent } from './alert/alert.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    NewletterComponent,
    SearchformComponent,
    MainraisedComponent,
    AccueilComponent,
    OffresListComponent,
    SingleOffreComponent,
    FormOffreComponent,
    PanelComponent,
    HomeComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    // Mes Ajouts
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Toast
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // ToastrModule added
  ],
  providers: [
    AuthService,
    AuthGuardService,
    // Ajouté le lundi 03/12
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
