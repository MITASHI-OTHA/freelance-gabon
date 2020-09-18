import { Subscriber, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../AuthService';
import { SetSessionService } from '../set-session.service';
declare var $ , jQuery: any;
@Component({
  selector: 'app-oneprojet',
  templateUrl: './oneprojet.component.html',
  styleUrls: ['./oneprojet.component.css']
})
export class OneprojetComponent implements OnInit {
  @Input() avatar;
  @Input() Auth;
  @Input() name;
  iDRoute;
  titre: String;
  auteur: String;
  dates: any;
  budget: any;
  devis: any;
  type: any;
  categorie: String;
  description: String;
  recruteur;
  @Input() devisFree;
  relatif;
  unconnected = true;
  error;
  link = 'http://localhost/php-challenge/src/avatars/';
  inactive;
  warn;
  message: String;
  idProj;
  competences;
  disabel;
  constructor(private allprojets: AllprojetsService, private routeActivate: ActivatedRoute, private router: Router, private Auths: AuthService, private session: SetSessionService) {}

  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
    $('.ui.checkbox').checkbox();
    //console.log('route info ', this.routeActivate.snapshot);
    const id  = this.routeActivate.snapshot.params['id'];
    this.iDRoute = id;
    this.idProj = id;
    const key  = this.routeActivate.snapshot.params['key'];
    const storage = JSON.parse(sessionStorage.getItem('projets')) || [];
    const FindID = typeof(storage[key]);
    //console.log('FIND ', FindID);
    const user = JSON.parse(this.allprojets.getLocal().getItem('user')) || [];
    if (user.length >= 0) {
        this.unconnected = false;
    }
    if (FindID === 'undefined') {
        this.router.navigate(['/']);
        return;
    }
    const req = this.allprojets.getOneProjet(id);
    this.allprojets.subjet.subscribe((res) => {
        //console.log('voila', res);
    });
      //console.log('notre req', req);
      this.titre = req.titre;
      this.auteur = req.auteur;
      this.dates = req.dates;
      this.budget = req.budget;
      this.type = req.titre;
      this.categorie = req.categorie;
      this.devis = req.devis;
      this.description = req.description;
      this.relatif = req.relatif;
      this.competences =  req.competences;
      this.allprojets.getCurrentRec(id).then(val => {
              //console.log('notre recruteur ', val);
              this.recruteur = val;
      });
        this.devisFreeAll(id);
        this.disables();
        //console.log('bloblbo ', $('.col-right-connect').height());
        $('#click').on('click', () => {
            this.router.navigate(['/', 'signin']);
            $('#popup').modal('hide');
        });
    }
    devisFreeAll(id) {
         this.allprojets.getDevisFree(id).then(rx => {
            this.devisFree = rx;
            //console.log('devis free ', rx);
      });
    }
    create() {
        $('#popup').modal('hide');
    }
  onSubmit(form: NgForm) {
       const user = new Loger(form.value.email, form.value.password);
        this.allprojets.login(user).then((rep: any) => {
            if (rep.status === false ) {
                this.error = true;
                return;
            } else {
               this.error =  false;
               this.session.setSession(rep);
               this.avatar = rep[0].avatar;
               this.name = rep[0].userName;
               this.Auth = this.Auths.connected();
               $('#popup').modal('hide');
            }
        });
  }
  disables () {
    const status = JSON.parse(this.allprojets.getLocal().getItem('user')) || [];
    if (status.length >= 1) {
    const use = status[0].status;
            if (use !== 'free') {
                this.disabel = true;
                }
            }
  }
  Getdevis() {
      const user = this.Auths.Auth;
      if (user === false) {
        const pop =  $('#popup').modal('show');
      } else {
        const status = JSON.parse(this.allprojets.getLocal().getItem('user'))[0].status;
        if (status !== 'free') {
            return;
        }
        $('#modalDevis').modal('show');
      }
  }
  range = (value) => { const a = []; for (let i = 0; i < value; ++i) { a.push(i + 1); } return a; };
  onSubmits (form: NgForm) {
    this.inactive = true;
  //console.log('les données ', form.value, 'idProj ', this.idProj);
  const idUser = JSON.parse(this.allprojets.getLocal().getItem('user'))[0].id;
  const devis = new Devis(form.value.prix, form.value.duree + ' ' + form.value.temps, form.value.note, this.idProj, idUser);
  this.allprojets.setDevis(devis).then((response: any) => {
        this.inactive = false;
        if (response.res === false ) {
            this.warn = true;
            this.message = 'Désolé, tu as dèjà envoyé un devis pour ce projet !';
        } else {
          this.warn = false;
          this.message = '';
          setTimeout(() => {
              $('#modalDevis').modal('hide');
              this.devisFreeAll(this.idProj);
          }, 1000);
        }
  });
 }
}
export class Loger {
    constructor(public email, public password) {}
}
export class Devis {
    constructor(public prix, public temps, public note, public idP, public idUser) {}
  }
