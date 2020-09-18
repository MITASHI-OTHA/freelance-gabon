import { SetSessionService } from './../set-session.service';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var $, jQuery, mojs, FB, window: any;
@Component({
  selector: 'app-one-freelancer',
  templateUrl: './one-freelancer.component.html',
  styleUrls: ['./one-freelancer.component.css']
})
export class OneFreelancerComponent implements OnInit {
  Freelanceurs;
  user: any;
  allProjets;
  shouldDoIt;
  disabel;
  nul;
  nom;
  idFree;
  idRec;
  error;
  err;
  disable;
  noExist;
  constructor(private services: AllprojetsService, private routeActivate: ActivatedRoute, private route: Router, private session: SetSessionService) {
  }

  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
    this.initFacebook();
    $('.ui.checkbox').checkbox();
    const id  = this.routeActivate.snapshot.params['id'];
    const nom  = this.routeActivate.snapshot.params['nom'];
    const f = this.services.Freelancers;
    if (f === undefined) {
      this.services.getFreelancer().then(rep => {
        this.Freelanceurs = rep;
        this.getFree(id);
        document.title = 'Decouvrer le Freelancer ' + rep[0].nom + ' sur Freelance Gabon | Premiere plateform de Freelance au Gabon';
      });
    } else {
      this.Freelanceurs = f;
      this.getFree(id);
    }
    let status = JSON.parse(this.services.getLocal().getItem('user')) || [];
    if (status.length >= 1) {
      status = status[0].status;
      if (status !== 'Recruteur') {
              this.disabel = true;
              return;
          } else {
            this.getMyprojet();
            this.disabel = false;
          }
    } else {
      this.disabel = true;
    }
   
  }
  initFacebook() {
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '1006362419543885',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11'
      });
    };
    (function(d, s, id) {
       const fjs = d.getElementsByTagName(s)[0];
       let js: any = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) { return; }
       js = d.createElement(s); js.id = id;
       js.src = 'https://connect.facebook.net/en_US/sdk.js';
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  shareFB(photo, nom, metier, id) {
    // Dynamically gather and set the FB share data.
    const FBDesc      = nom + ' est ' + metier + ' . Decouvrez ce ses talents dans Freelance Gabon';
    const FBTitle     = 'Decouvre les services  de ' + nom + ' sur Freelance Gabon';
    const FBLink      = 'http://localhost/php-challenge';
    const FBPic       = photo;
    // Open FB share popup
    FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
            object: {
                'og:url': FBLink,
                'og:title': FBTitle,
                'og:description': FBDesc,
                'og:image': FBPic
            }
        })
    },
    function (response) {
    });
  }
  shareTweet(nom: String, talent: String) {
          const text = 'Découvre les services que offre ' + nom + ' sur Freelance Gabon . Regarde ses talents sur http://localhost/php-challenge';
          const url = 'https://twitter.com/intent/tweet?text=' + text;
          const title = 'Partager sur Tweeter';
          const top = window.screentop || window.screenY;
          const left = window.screenLeft || window.screenX;
          const width = window.innerWidth || document.documentElement.clientWidth;
          const height = window.innerHeight || document.documentElement.clientHeight;
          const popup_width = 640;
          const popup_height = 340;
          const popup_left = left + width / 2 - popup_width / 2;
            const popup_top = top + height / 2 - popup_height / 2;
          window.open(url, title, 'scrollbar=yes,width=' + popup_width + ',height=' + popup_height + ',top=' + popup_top + ',left=' + popup_left);
  }
  shareGoogle(nom: String, talent: String, id) {
    const text = 'Découvre les services que offre ' + nom + ' sur Freelance Gabon . Regarde ses talents sur http://localhost/php-challenge';
    const uri = 'http://localhost/php-challenge/' + id + '/' + nom;
    const url = 'https://plus.google.com/share?url=' + uri;
    const title = 'Partager sur Google';
    const top = window.screentop || window.screenY;
    const left = window.screenLeft || window.screenX;
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    const popup_width = 640;
    const popup_height = 340;
    const popup_left = left + width / 2 - popup_width / 2;
    const popup_top = top + height / 2 - popup_height / 2;
    window.open(url, title, 'scrollbar=yes,width=' + popup_width + ',height=' + popup_height + ',top=' + popup_top + ',left=' + popup_left);
  }
  viewProject(projetID, titres, i) {
    this.route.navigate(['/', projetID, titres, i]);
    $('#col-prop').modal('hide');
  }
  getFree(id) {
   const fre = this.Freelanceurs.find((free) => {
       return free.id === id;
    });
    //console.log('notre type ', fre);
    if (typeof(fre) === 'undefined') {
      this.route.navigate(['/']);
      return;
    }
    this.user = fre;
    this.nom = fre.nom;
    this.idFree = fre.id;
  }
  popup() {
    $('#col-prop').modal('show');
    this.error = false;
  }
  range = (value) => { const a = []; for (let i = 0; i < value; ++i) { a.push(i + 1); } return a; };
  getMyprojet() {
    const id = JSON.parse(this.services.getLocal().getItem('user'))[0].id;
    this.idRec = id;
    this.services.getMyproj(id).then((rep: any) => {
      this.allProjets = rep.length > 0 ? rep : false;
      if (this.allProjets === false) {
        this.nul = true;
      } else {
        this.nul = false;
      }
      this.shouldDoIt = true;
      //console.log('all proj ', rep);
    });
  }
  onSubmit(form: NgForm) {
    this.disable = true;
    //console.log('form ', form.value);
    if ($('.checkbox').hasClass('checked')) {
      this.session.putLocal();
    } else {
      this.session.removeLocal();
    }
    const person = new Loger(form.value.email, form.value.password);
        this.services.login(person).then((pers: Freelancers) => {
          if (pers.status === false) {
            $.amaran({
              content: {
                  bgcolor: '#ff4133',
                  color: '#fff',
                  message: 'Désolé votre email ou mot de passe est incorrecte !',
                 },
              theme: 'colorful',
              position: 'top right',
              delay: 5500
          });
          this.noExist = true;
            return;
          }
            this.session.setSession(pers);
            $.amaran({
              'message'   : 'Tu es connecté !',
              'position'  : 'top right',
              'duration'  : 10000
            });
            this.noExist = false;
            setTimeout(() => {
               this.route.navigate(['/']);
            }, 3000);
      });
  }
  getStatusText(sts, name) {
    if (sts) {
      return {
        status: 'Disponible',
        texte: name + ' a confirmé dans les 7 derniers jour être disponible à temps plein'
      };
    } else {
      return {
        status: 'Indisponible',
        texte: name + ' n\'a pas confirmé être disponible'
      };
    }
  }
  create() {
    $('#inconnu').modal('hide');
  }
  boot() {
    const q = JSON.parse(this.services.getLocal().getItem('user')) || [];
     if (q.length <= 0 ) {
       $('#inconnu').modal('show');
     } else {
           this.services.boots(this.idRec, this.idFree).then((response: any) => {
          if (response.res === 'down') {
              this.user.evaluation = parseInt(this.user.evaluation, 0) - 1;
              //console.log('freee ', this.user.evaluation);
          } else {
            console.log('freee ', this.user.evaluation);
            this.user.evaluation = parseInt(this.user.evaluation, 0) + 1;
          }
        });
     }
  const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
  const el = document.querySelector('.icobutton');
  const elSpan: any = el.querySelector('.span');
  const timeline = new mojs.Timeline();
  const tween1 = new mojs.Burst({
    parent: el,
    duration: 1500,
    shape : 'circle',
    fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    opacity: 0.6,
    childOptions: { radius: {20: 0} },
    radius: {40: 120},
    count: 6,
    isSwirl: true,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
  }),
  tween2 = new mojs.Transit({
    parent: el,
    duration: 750,
    type: 'circle',
    radius: {0: 50},
    fill: 'transparent',
    stroke: '#988ADE',
    strokeWidth: {15: 0},
    opacity: 0.6,
    easing: mojs.easing.bezier(0, 1, 0.5, 1)
  }),
  tween3 = new mojs.Tween({
    duration : 900,
    onUpdate: function(progress) {const scaleProgress = scaleCurve(progress);
      elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
    }
  }),
  moburst5 = new mojs.Burst({
    parent: 	el,
    count: 		12,
    left: '30%', top: '-100%',
    radius: 		{0: 60},
    children: {
      fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
      duration: 	1400,
      delay: 			400,
      easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
    }
  });
// add tweens to timeline:
timeline.add(tween1, tween2, tween3, moburst5);
timeline.play();
// when clicking the button start the timeline/animation:
el.addEventListener('mousedown', function() {
  timeline.replay();
});
  }
  propose(idRec, projetID, idFree) {
    const obj = new Notif(idRec, projetID, idFree);
    this.services.setnotif(obj).then((resp: any) => {
        if (resp.res === false) {
          $.amaran({
            content: {
                bgcolor: '#ff4133',
                color: '#fff',
                message: 'Projet non soumis !',
               },
            theme: 'colorful',
            position: 'top right',
            delay: 5500
        });
        this.error = true;
        this.err = 'Vous avez dèjà proposé ce projet à ce Freelancer';
        } else {
          this.error = false;
          $('#col-prop').modal('hide');
        }
    });
  }
}
export class Notif {
  constructor(public auteur, public id, public Freelancer) {}
}
export class Loger {
  constructor (public email, public password) {}
}
export class Freelancers {
    constructor(public id, public nom, public avatar, public status, public email, public specialite, public inscription, public skill) {}
}
