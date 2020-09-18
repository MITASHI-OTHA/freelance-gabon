import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllprojetsService, InfosUser } from './../allprojets.service';
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Profil } from '../profil.model';
import { timeout } from 'q';
declare var $, Cropper: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  noms: String;
  ville = 'Inconnu';
  emails;
  avatars;
  blobImage;
  globals = this;
  villes;
  myfrom: FormGroup;
  variable;
  wrong = false;
  headInfos;
  footerInfos;
  BtnDisabled;
  instruction;
  emptyville;
  @Input() t;
  @Input() color;
  @Input() head;
  @Input() message;
  constructor(private allprojet: AllprojetsService, private zone: NgZone, private fb: FormBuilder, private router: Router) {
    this.buildForm();
  }
  buildForm() {
    this.myfrom = this.fb.group({
      nom: [null, Validators.minLength(3)],
      ville: [null, Validators.required],
      email: [this.emails, [Validators.email]],
      photo: [null]
    });
  }
  savedcompte() {
    let form1 = this.myfrom.value;
    //console.log('forrrme ', form1);
    if (form1.email === null && form1.nom === null) {
      this.variable = 'Vous n\'avez pas changez votre nom et votre email, voulez-vous les garder ?';
      $('#modal').modal('show');
      const dimmer = $('.ui.dimmer').is(':hidden') ? true : false;
      $('.setName').click(() => {
        const getName = JSON.parse(this.allprojet.getLocal().getItem('user'));
        const names = getName[0].userName;
        const email = getName[0].email;
        this.myfrom.get('nom').setValue(names);
        this.myfrom.get('email').setValue(email);
        form1 = this.myfrom.value;
        this.validForm1(form1);
      });
    } else if (form1.nom === null && form1.email !== null) {
      $('#modal').modal('show');
      $('.ui.modal').modal('show');
      this.variable = 'Vous n\'avez pas changez votre nom, voulez-vous le garder ?';
      $('.setName').click(() => {
        const getName = JSON.parse(this.allprojet.getLocal().getItem('user'));
        const names = getName[0].userName;
        this.myfrom.get('nom').setValue(names);
        form1 = this.myfrom.value;
        this.validForm1(form1);
      });
    } else if (form1.email === null) {
      this.variable = 'Vous n\'avez pas changez votre email, voulez-vous le garder ?';
      $('#modal').modal('show');
      $('.setName').click(() => {
        const getName = JSON.parse(this.allprojet.getLocal().getItem('user'));
        const email = getName[0].email;
        this.myfrom.get('email').setValue(email);
        form1 = this.myfrom.value;
        this.validForm1(form1);
      });
    } else {
      this.validForm1(form1);
    }
  }
  validForm1(form1) {
    this.BtnDisabled = true;
      const get = JSON.parse(this.allprojet.getLocal().getItem('user'));
      const getPhoto = get[0].avatar;
      const last_email = get[0].email;
      const formProfil = new Profil(form1.nom, form1.email, form1.ville , getPhoto, last_email);
      this.allprojet.saveForm1(formProfil).then((res: any) => {
          if (res.rep === false) {
            this.BtnDisabled = false;
            this.wrong = true;
          } else {
          this.BtnDisabled = false;
          this.headInfos = 'Vos changements ont été effectué avec succès !';
          this.footerInfos = 'Vous avez changé les détails de votre compte !';
          const maj = JSON.parse(this.allprojet.getLocal().getItem('user'));
          const perc = maj[0].percent = res.percent;
          this.allprojet.getLocal().setItem('user', JSON.stringify(maj));
          const req = this.allprojet.setLdBar();
          const t = req.percent;
          this.head = req.head;
          this.message = req.message;
          this.color = req.color;
          $('#bar').progress({
            percent: t
          });
          $.amaran({
            'message'   : 'Tu as modifié tes infos',
            'position'  : 'bottom right',
            'duration'  : 10000
          });
          this.Setinput();
          this.wrong = false;
          const str = JSON.parse(this.allprojet.getLocal().getItem('user'));
          str[0].email = form1.email;
          str[0].userName = form1.nom;
          str[0].ville = form1.ville;
          this.allprojet.getLocal().setItem('user', JSON.stringify(str));
          $('.succes--').fadeIn().fadeOut(10000);
           $('.prf').click()
          }
      });
  }
Setinput() {
 const inf = this.allprojet.infosUser;
 this.noms = inf[0].nom;
 this.avatars = inf[0].avatar;
 this.emails = inf[0].email;
 this.emptyville = inf[0].ville ? false : true
 console.log('ville ', inf[0].ville );
}

  ngOnInit() {
    this.Setinput();
    $('.message .close')
        .on('click', function() {
          $(this)
            .closest('.message')
            .transition('fade')
          ;
        });
        
    $('.fluid.dropdown').dropdown();
    $('.btn-change-photo').on('click', function() {
      $('.photo').click();
    });
    this.getVille();
  }
  getVille() {
    this.allprojet.getVille().then(v => {
      this.villes = v;
    });
  }
  subVal(text) {
    const val = text.substring(0, 4);
    return val;
  }
}
export class Response {
  constructor(public rep) {}
}
