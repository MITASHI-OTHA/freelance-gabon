import { PagerService } from './pages.service';
import { GuardProfil } from './GuardProfil';
import { AllprojetsService } from './allprojets.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, CanActivate, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjectsComponent } from './projects/projects.component';
import { OneprojetComponent } from './oneprojet/oneprojet.component';
import { SigninComponent } from './signin/signin.component';
import { RecruteursComponent } from './recruteurs/recruteurs.component';
import { Myservices } from '../assets/services/myservices';
import { EnteteComponent } from './entete/entete.component';
import { ProfilFreeComponent } from './profil-free/profil-free.component';
import { DetailsComponent } from './details/details.component';
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { GuardService} from './guard.service';
import { AuthService } from './AuthService';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import {DataTableModule} from 'primeng/datatable';
import { PopupWindownComponent } from './popup-windown/popup-windown.component';
import { SlideComponent } from './slide/slide.component';
import { OneFreelancerComponent } from './one-freelancer/one-freelancer.component';
import { ModalDevisComponent } from './modal-devis/modal-devis.component';
import { ProfilRecruteurComponent } from './profil-recruteur/profil-recruteur.component';
import { FooterComponent } from './footer/footer.component';
import { AllFreelancersComponent } from './all-freelancers/all-freelancers.component';
import { ConditionComponent } from './condition/condition.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AproposComponent } from './apropos/apropos.component';
import { FilterPipe} from './filter.pipe';
const appRoute: Routes = [
  {path: ':id/:titre/:key', component: OneprojetComponent},
  {path: 'login', component: LoginComponent, canActivate: [GuardService]},
  {path: 'signin', canActivate: [GuardService], component: SigninComponent},
  {path: ':id/:nom', component: OneFreelancerComponent},
  {path: 'profilRec', component: ProfilRecruteurComponent},
  {path: 'tous les freelancers', component: AllFreelancersComponent},
  {path: 'condition d\'utilisation', component: ConditionComponent},
  {path: 'recherche/query/:title/:town', component: RechercheComponent},
  {path: 'a propos', component: AproposComponent},
  {path: 'profilFree', component: ProfilFreeComponent, canActivate: [GuardProfil], children: [
    {
      path: 'details compte', component: DetailsComponent, outlet: 'aux'
    },
    {
      path: 'details du profil', component: ProfilDetailComponent, outlet: 'aux'
    },
    {
      path: 'details du projet', component: ProjetDetailComponent, outlet: 'aux'
    }
  ]
},
  {path: '', component: AccueilComponent},
  {path: 'noFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'noFound', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProjectsComponent,
    OneprojetComponent,
    SigninComponent,
    RecruteursComponent,
    EnteteComponent,
    ProfilFreeComponent,
    DetailsComponent,
    ProfilDetailComponent,
    ProjetDetailComponent,
    NotFoundComponent,
    LoginComponent,
    ProfilUserComponent,
    PopupWindownComponent,
    SlideComponent,
    OneFreelancerComponent,
    ModalDevisComponent,
    ProfilRecruteurComponent,
    FooterComponent,
    AllFreelancersComponent,
    ConditionComponent,
    RechercheComponent,
    AproposComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
   /*  RouterModule.forRoot(appRoute,
      { enableTracing: true }), */
    RouterModule.forRoot(appRoute, {useHash: true}),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  providers: [AllprojetsService, Myservices, GuardService , AuthService, GuardProfil, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
