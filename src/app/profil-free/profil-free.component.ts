import { AllprojetsService } from './../allprojets.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $, jQuery: any;
@Component({
  selector: 'app-profil-free',
  templateUrl: './profil-free.component.html',
  styleUrls: ['./profil-free.component.css']
})
export class ProfilFreeComponent implements OnInit {
  positives;
  instruction;
  modals;
  x;
  propriety = [
    {
      time: 1000,
      texte: 'Click sur cet onglet pour saisir les détails de ton compte',
      left: '10%'
    },
    {
      time: 5000,
      texte: 'Click sur cet onglet pour saisir les détails de ton profil',
      left: '30%'
    },
    {
      time: 15000,
      texte: 'Click sur cet onglet pour voir les projets auxquelles tu as postulés',
      left: '45%'
    }
  ]
  constructor(private component: AppComponent, private routes: Router, private route: ActivatedRoute, private service: AllprojetsService) { }
  tutoriel () {
    setTimeout(()=> {
      this.modals = true;
        window.scrollTo(0, 0);
        $('#Tuto')
        .modal('setting', 'closable', false)
        .modal('behavior name', 'refresh')
        .modal('show')
         $('body').css('overflow', 'hidden')
         window.scrollTo(0, 0)
      }, 3000);
      this.x = setInterval(()=> {
        clearInterval(this.x);
        this.tutoriel();
      }, 20000) 
    for (let prop of this.propriety) {
      setTimeout(()=> {
          $('.Tuto').css('left', prop.left);
          this.instruction =prop.texte;
        },
        prop.time
      )
    }
  }
  closer() {
    $('.Tuto').modal('hide')
    this.modals = false
    $('body').css('overflow', 'auto')
    clearInterval(this.x);
    let id = JSON.parse(this.service.getLocal().getItem('user'))[0].id
    this.service.vueTuto({'id': id}).then(el => {
      let user = JSON.parse(this.service.getLocal().getItem('user'))
      user[0].tuto = 1
      sessionStorage.setItem("user", JSON.stringify(user));
    })
  }
  ngOnInit() {
    let tuto = JSON.parse(this.service.getLocal().getItem('user'))[0].tuto
    typeof tuto === 'object' ? tuto = 0 : tuto = tuto
    console.log('tuto ', tuto)
    if (parseInt(tuto) <= 0 )  {
        // this.tutoriel()
    }
    let p = this.propriety;
    $('.ui.dimmer').css('background-color', 'rgba(0, 0, 0, 0.62)');
    jQuery(window).trigger('resize').trigger('scroll');
      const disp = JSON.parse(this.service.getLocal().getItem('user'));
      const q = disp[0].dispo ? true : false;
      this.positives = q;
      console.log('positives ', q);
      if (!disp[0].dispo) {
        this.service.getLocal().setItem('user', JSON.stringify(disp));
      }
      $('.ui.checkbox')
        .checkbox();
    $('.items-user').on('click', function() {
     $('.items-user').each(function() {
        $(this).removeClass('activate');
     });
     $(this).addClass('activate');
    });
    $('.check').on('click', () => {
        const email = JSON.parse(this.service.getLocal().getItem('user'))[0].email;
        //console.log('pos ', this.positives);
        if (this.positives === false) {
          this.positives = true;
          const user = JSON.parse(this.service.getLocal().getItem('user'));
            $('.check').removeClass('ok');
           user[0].dispo = true;
           this.service.getLocal().setItem('user', JSON.stringify(user));
            $.ajax({
              type: 'POST',
              url: 'http://localhost/php-challenge/dispo.php',
              data: {email: email, dispo: 1}
            });
        } else {
          this.positives = false;
          $('.check').addClass('ok');
          $('.check').removeClass('ok');
          const users = JSON.parse(this.service.getLocal().getItem('user'));
           users[0].dispo = false;
           //console.log('user ', users);
           this.service.getLocal().setItem('user', JSON.stringify(users));
            $.ajax({
              type: 'POST',
              url: 'http://localhost/php-challenge/dispo.php',
              data: {email: email, dispo: 0}
            });
        }
    });
  }
}
