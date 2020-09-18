import { Component, OnInit, Input } from '@angular/core';
import { AllprojetsService } from '../allprojets.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
declare var jQuery, $, Quill, ldBar: any;
@Component({
  selector: 'app-profil-recruteur',
  templateUrl: './profil-recruteur.component.html',
  styleUrls: ['./profil-recruteur.component.css']
})
export class ProfilRecruteurComponent implements OnInit {
rec = true;
variable;
villes;
currentVille;
noms;
emails;
desactivate;
quill;
apropos;
categorie;
competence;
file;
url = 'http://localhost/php-challenge/sendFile.php';
desactivated;
error;
success;
message;
bar1;
notif = {res: false, message: '', color: ''};
filename;
shows = false;
allProjets;
allFreeDevis: any;
shouldDoIt;
header;
contexte;
tada = true;
sendID;
sendEtat;
private colors: any = [
  {
    id: 0,
    color: '#fff',
  },
  {
    id: 1,
    color: 'rgb(238, 255, 228)',
  },
  {
    id: 2,
    color: '#ffbdb8',
  }
];
  constructor(private service: AllprojetsService, private routes: Router) { }
  myAlert() {
    if (this.shouldDoIt) {
      $('.dropdown.item')
    .dropdown();
      this.shouldDoIt = false;
    }
  }
  ngOnInit() {
    $('.fluid.dropdown, .dropdown.item')
    .dropdown();
    $('select.dropdown')
    .dropdown();
    $('.btn-change-photo').on('click', function() {
      $('.photo').click();
    });
    jQuery(window).trigger('resize').trigger('scroll');
    $('.items-user').on('click', function() {
      $('.items-user').each(function() {
         $(this).removeClass('activate');
      });
      $(this).addClass('activate');
     });
     this.getVilles();
     $('.attachement').on('click', () => {
          $('#attachement').click();
     });
     const options = {
      placeholder: 'écrivez ici',
      theme: 'snow'
    };
     this.quill = new Quill('#editor', options);
     this.service.getCompetence().then(response => {
      this.competence = response;
    });
    this.service.getCategorie().then(res => {
        this.categorie = res;
    });
   this.bar1 = new ldBar('#ldbar');
   this. getMyprojet();
  }
  seen(projetID, titres , i) {
        this.routes.navigate(['/', projetID, titres, i]);
  }
  getMyprojet() {
    const id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
    this.service.getMyproj(id).then((rep: any) => {
      this.allProjets = rep.length > 0 ? rep : false;
      this.shouldDoIt = true;
      //console.log('all proj ', rep);
    });
  }
  terminer(id, etat, state) {
    $('#confirmation').modal('show');
    state = parseInt(state, 0);
    if (state === 0) {
      this.header = 'Fermer ce projet ?';
      this.contexte = 'Si vous fermez ce projet vous ne recevrez plus de devis';
    } else if (state === 1) {
      this.header = 'Réouvrir ce projet ?';
      this.contexte = 'Êtes-vous certain de réouvrir ce projet ?';
    } else {
      this.header = 'Abandonner ce projet ?';
      this.contexte = 'Êtes-vous certain d\'abandonner ce projet ?';
    }
    this.sendID = id;
    this.sendEtat = etat;
  }
  yes() {
    const id = this.sendID;
    const etat = this.sendEtat;
      this.service.Terminerproj(id, etat).then(res => {
          this.getMyprojet();
          this.shouldDoIt = true;
      });
  }
  getColors(sts) {
    const id = parseInt(sts, 0);
    const  clored = this.colors.find(
        (x) => {
              return x.id === id;
        });
        if (typeof(id) === undefined || typeof(id) === 'undefined') {
          return '#fff';
        } else {
          return clored.color;
        }
  }
  supprimer(id) {
    this.service.suppproj(id).then(res => {
        this.getMyprojet();
    });
  }
  fileEvent($event) {
    //console.log('event ', $event);
    this.desactivated = true;
    this.shows = true;
    const files = $event.srcElement.files[0];
    this.file = files;
    const formdata = new FormData();
    formdata.append('fichier', this.file);
    $.ajax({
      type: 'POST',
      url: this.url,
      contentType: false,
      processData: false,
      data: formdata,
      xhr: () => {
        const xhr = $.ajaxSettings.xhr();
        const lb = this.bar1;
        xhr.upload.onprogress = function(e) {
              const percent = Math.round(e.loaded * 100 / e.total);
              const bar = percent * 400 / 100;
              const opp = percent * 0.9 / 100;
              const loaded = Math.round((e.loaded / e.total) * 100);
              lb.set(loaded);
        };
         return xhr;
      },
      success: (res) => {
        this.desactivated = false;
        this.notif.res = true;
        this.notif.message = 'Votre fichier est prêt pour l\'envoie';
        this.notif.color = 'green';
        setTimeout(() => {
          this.success = false;
        }, 10000);
        const fichier =  JSON.parse(res);
        this.filename = fichier.name;
        this.desactivated = false;
      },
      error: () => {
        this.desactivated = false;
        this.notif.res = true;
        this.notif.color = 'red';
        this.notif.message = 'Votre fichier n\'a pas pu être importé !';
        this.desactivated = false;
      }
    });
  }
  getVilles() {
    this.service.getVille().then(v => {
        this.villes = v;
        //console.log('villes ', v);
    });
    this.emails = JSON.parse(this.service.getLocal().getItem('user'))[0].email;
    this.noms = JSON.parse(this.service.getLocal().getItem('user'))[0].userName;
  }
  onSubmit(form: NgForm) {
    this.desactivate = true;
    //console.log('les valeurs ', form.value);
    const id  =  JSON.parse(this.service.getLocal().getItem('user'))[0].id;
    const forms = new Form1(form.value.nom, form.value.email, form.value.ville, id);
    this.service.postRec1(forms).then((res) => {
      this.desactivate = false;
      $.amaran({
        'message'   : 'Profil mis-à-jour !',
        'position'  : 'bottom right',
        'duration'  : 10000
      });
    });
  }
  sendProjet(form2: NgForm) {
    this.desactivated = true;
    const texte = $('.ql-editor');
    const textes = texte[0].innerHTML;
    const word = texte[0].innerText;
    if (word.length <= 1) {
      this.apropos = true;
      this.desactivated = false;
      return;
    }
    this.apropos = false;
    const editor_content = this.quill.container.innerHTML;
    const texte2 = $('.ql-editor');
    const textes2 = texte[0].innerHTML;
    const id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
    //console.log('envoie des données ', form2.value , 'files ', this.file);
    const projet = new Form2(id , form2.value.titre, form2.value.budget, form2.value.receipt, form2.value.categories, textes2, form2.value.type, form2.value.attachement ? this.filename : null);
    this.service.sendForm2(projet).then((response: any) => {
      this.success =  true;
      this.message = 'Vous avez publié un nouveau projet';
      this.shows = false;
      setTimeout(() => {
        this.success =  false;
      }, 10000);
      $.amaran({
        'message'   : 'Votre sujet a été publié sur le site ! <i class="far fa-hand-peace" style="font-size: 18px;"></i>',
        'position'  : 'top right',
        'duration'  : 10000
      });
    });
  }
  openTab(evt, cityName) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
export class Form1 {
  constructor(public nom, public email, public ville, public id) {}
}
export class Form2 {
  constructor(public id , public titre, public prix, public competence, public categorie, public description, public type , public file ?: String) {}
}
