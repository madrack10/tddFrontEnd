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
import { HttpClientModule } from '@angular/common/http';
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
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
