import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from '../AuthService';
import Swal from 'sweetalert2';
declare var $, window: any;
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() default = 'http://localhost/php-challenge/src/avatars/default.png';
  constructor(private routes: Router, private Auth: AuthService, private service: AllprojetsService) { }

  ngOnInit() {
    $('.profil-slide').css('height', $(window).height() + 'px');
    $(window).resize(function() {
      $('.profil-slide').css('height', $(window).height() + 'px');
      $('.window-opacity').css({'height': $(window).height() + 'px', 'width': $(window).width() + 'px'});
    });
    $('.window-opacity').css({'height': $(window).height() + 'px', 'width': $(window).width() + 'px'});
    $('.freee').on('click', () => {
      const store = this.service.getLocal();
      const $q = JSON.parse(store.getItem('user'))[0].status;
      if ($q === 'free' || $q === 'Freelancer') {
        this.routes.navigate(['profilFree', {outlets: {'aux': ['details compte']}}]);
      } else if ($q === 'Recruteur') {
          this.routes.navigate(['profilRec']);
      }
      });
      this.getProfil();
  }
  notificate() {
    Swal({
      title: 'Tu n\'as pas de nouvelle notification ',
      width: 600,
      padding: 3,
      background: '#fff url(../../avatars/sample_iphone_7_dribbble_1x.jpg)',
      backdrop: `rgba(0,0,123,0.4)
        url('../../avatars/sample_iphone_7_dribbble_1x.jpg')
        center left
        no-repeat `
    });
  }
  getProfil() {
    const use =  this.Auth.getUser();
    if (use !== false) {
      this.default = use[0].avatar;
      console.log('avatar ', this.default);
    }
   }
   logout() {
       $('.profil-slide').css('right', '-22em');
       this.Auth.logout();
       $('.window-opacity').fadeOut();
       $('body').toggleClass('scrollToggle');
   }
   slideReturn() {
       $('.profil-slide').css('right', '-22em');
       $('.window-opacity').fadeOut();
       $('body').toggleClass('scrollToggle');
   }
}
