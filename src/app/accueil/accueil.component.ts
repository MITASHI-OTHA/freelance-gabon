import { slideInDownAnimation } from './../animations';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
declare var $, jQuery: any;
declare var Typed: any;
import { Router, Routes } from '@angular/router';
import { AuthService } from '../AuthService';
import { AllprojetsService } from '../allprojets.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $, window: any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [slideInDownAnimation]
})
export class AccueilComponent implements OnInit {
  connected;
  competences;
  ville;
  constructor(private routes: Router, private Auth: AuthService, private service: AllprojetsService) {
  }
  ngOnInit() {
   /*  $('.cloud').jQlouds({
      minClouds: 3,
      maxWidth: 90, // max image's width
      maxHeight: 48, // amx image's height
      wind: true
    }); */
    const size = $(window).width();
    const sizes = document.documentElement.clientWidth;
    if (size <= 320 || sizes <= 320) {
    }
    this.service.searchCompetence().then(response => {
      this.competences = response;
      $('.freelancer')
      .search({
        source: this.competences
      });
  });
  this.service.searchVille().then(response => {
    this.ville = response;
    $('.ville')
    .search({
      source: this.ville
    });
});
this.serchInit();
    //console.log('connected ? ', this.connected);
    const typed = new Typed('.type', {
      strings: ['Un point de rencontre entre freelancers et recruteurs', 'Trouvez de nouveaux projets', 'Trouvez des freelancers', 'Travaillez librement', 'Gagnez de l\'argent rapidement'],
      typeSpeed: 100,
      loop: true
    });
    jQuery(window).trigger('resize').trigger('scroll');
   // $('.parallax-windows').parallax({imageSrc: '../../assets/beard-blur-casual-462680.jpg', overScrollFix: true});
  $('.parallax-windows').css({'background-position': 'center', 'background-repeat':'no-repeat', 'background-size': 'cover', 'background-image': "url('../../assets/beard-blur-casual-462680.jpg')"})
    $('.parallax-windows').css('height', $(window).height + 'px');
    this.getAuths();
    $('.slider').slick({
      // normal options...
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      // the magic
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        }, {
          breakpoint: 300,
          settings: 'unslick' // destroys slick
        }]
    });
    /* slider testemony */
    $( function() {
      /*
      - how to call the plugin:
      $( selector ).cbpQTRotator( [options] );
      - options:
      {
        // default transition speed (ms)
        speed : 700,
        // default transition easing
        easing : 'ease',
        // rotator interval (ms)
        interval : 8000
      }
      - destroy:
      $( selector ).cbpQTRotator( 'destroy' );
      */

      $( '#cbp-qtrotator' ).cbpQTRotator();

    } );

    /* fin */
  }
  serchInit() {
    $('.search')
    .search('is empty', 'resultat introuvable');
  }
  onSubmit(form: NgForm) {
    const metier = form.value.metier;
    const e = $('#metier').val();
    const q = this.competences.find((res) => {
      return res.title === e;
    });
   if (q === undefined) {
    Swal('Erreur', 'le metier de Freelancer que vous cherchez n\ est pas repertorié ', 'error');
    return false;
   }
    const ville = form.value.ville;
    const v = $('#villes').val();
    //console.log('metier ', e, 'ville', v);
    if (metier.length <= 0 || ville.length <= 0) {
      Swal('Oops...', 'Vous n\'avez pas remplis tous les champs', 'error');
      return;
    }
     this.routes.navigate(['recherche', 'query', e, v]);
  }
  getAuths() {
   this.Auth.sujet.subscribe(res => {
     this.connected = res;
   });
   this.Auth.getAuth();
  }
}
