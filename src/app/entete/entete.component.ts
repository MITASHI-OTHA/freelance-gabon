import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit, Injectable, OnDestroy, Input } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';
import { Subscription, Observable, interval } from 'rxjs';
declare var $, jQuery: any;
@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit, OnDestroy {
  @Input() avatar = 'default.png';
  @Input() userName: String;
  specialite: String;
  email;
  @Input() Auth;
  tuto = false;
  id;
  link = 'http://localhost/php-challenge/src/avatars/';
  counter: Subscription;
  constructor(private allprjet: AllprojetsService, private Auths: AuthService, private route: Router) { }

  ngOnInit() {
      this.getUser();
      const header = $('#tete');
        header.before(header.clone().addClass('clone'));
      $(window).scroll(function() {
        const scroll = $(this).scrollTop();
          if (scroll > 100) {
            $('.clone').slideDown();
          } else {
            $('.clone').slideUp();
          }
      });
      $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
          $('body').css('overflow', 'hidden');
        }
    });
    $('body').on('click', function() {
      const arr =  $('.hamburger').attr('aria-expanded');
      if (arr === 'false') {
        $('body').css('overflow', 'scroll');
      }
    });
    $('.propos').on('click', () => {
          this.route.navigate(['a propos']);
    });
    $('.scrollProject').on('click', () => {
      this.route.navigate(['/']);
      const hauteur = $('.viewProject').offset().top;
      $('html,body').animate({scrollTop: hauteur }, 1000);
    });
    $('.scrollFree').click(() => {
      this.route.navigate(['/']);
        const hauteur = $('.scrollUsers').offset().top;
      $('html,body').animate({scrollTop: hauteur }, 1000);
    });
  }
  regleOpen() {
    $('#condition').modal('show');
  }
  controlName(nom: String) {
    if (nom.length >=15) {
      return nom.substr(0, 12) + '...';
    } else {
      return nom;
    }
  }
  getUser() {
     const use = this.Auths.getUser();
     //console.log('usssseee ', use);
     if (use !== false) {
        this.avatar = use[0].avatar;
        this.userName = use[0].nom;
        this.specialite = use[0].specialite;
        this.email = use[0].email;
        const skill = use[0].skill;
        if (skill === null) {
          setTimeout(() => {
            this.tuto = true;
          }, 3000);
        }
     }
   this.listenAuth();
  }
  listenAuth() {
    this.Auths.sujet.subscribe(rep => {
      this.Auth = rep;
    });
    this.Auths.getAuth();
  }
  changeSkill() {
    this.tuto = false;
    const js = JSON.parse(this.allprjet.getLocal().getItem('user'));
    js[0].skill = true;
    const email = js[0].email;
    this.allprjet.getLocal().setItem('user', JSON.stringify(js));
    this.allprjet.skill(email).then(res => {
      //console.log('etat de skill ', res);
    });
  }
  slideProfil() {
    $('.window-opacity').fadeIn();
    $('.profil-slide').css({'right': 0});
    $('body').toggleClass('scrollToggle');
  }
  ngOnDestroy() {

  }
}
