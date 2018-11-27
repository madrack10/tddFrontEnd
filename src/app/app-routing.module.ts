import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { from } from 'rxjs';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { OffresListComponent } from './offres-list/offres-list.component';
import { FormOffreComponent } from './offres-list/form-offre/form-offre.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/auth/signup', component: SignupComponent },
  { path: 'home/auth/signin', component: SigninComponent },
  { path: 'home/offres/all', component: OffresListComponent },
  { path: 'home/offres/addOffre', component: FormOffreComponent },
  { path: 'headers/navbar', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
