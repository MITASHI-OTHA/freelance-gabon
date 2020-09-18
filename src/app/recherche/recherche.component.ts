import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllprojetsService } from '../allprojets.service';
declare var $, jQuery: any;
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  call;
  competences;
  users;
  Notest;
  dimmer = true;
  oh = true;
  oh2 = true;
  count: number;
  texte;
  result;
  constructor(private routeActivate: ActivatedRoute, private service: AllprojetsService, private route: Router) { }

  ngOnInit() {
    this.count = 0;
    this.texte = 'Aucun Freelancer trouvé pour votre recherche !';
    jQuery(window).trigger('resize').trigger('scroll');
    const title  = this.routeActivate.snapshot.params['title'];
    this.call = title;
    const ville  = this.routeActivate.snapshot.params['town'];
    //console.log('id ', title , 'ville ', ville);
    $('.parallax-windows').parallax({imageSrc: '../../assets/freelance-Gabon-girl.jpg', overScrollFix: true});
    $('.parallax-windows').css('height', $(window).height + 'px');
      const user = this.service.Freelancers;
      //console.log('les user ', typeof(user));
      const tab = [];
      if (typeof user === 'undefined') {
        this.service.getFreelancer().then((data: any) => {
              for (let i = 0; i < data.length; i++) {
                  if (data[i].categorie === title) {
                      tab.push(data[i]);
                  }
              }
            if (tab.length <= 0) {
                 this.result = false;
            } else {
              this.result = true;
              this.users = tab;
              this.Notest = tab;
              this.count = tab.length;
            }
            //console.log('tab ', tab , 'taille ', tab.length);
        });
      } else {
          const $q = this.service.Freelancers;
            for (let i = 0; i < $q.length; i++) {
              if ($q[i].categorie === title) {
                  tab.push($q[i]);
              }
          }
            if (tab.length <= 0) {
            this.result = false;
              } else {
            this.result = true;
            this.users = tab;
            this.Notest = tab;
            this.count = tab.length;
              }
    }
      this.service.searchCompetence().then((response: any) => {
        const maker = response.find(rep => {
          return rep.title === this.call;
        });
        if (maker === undefined) {
            this.route.navigate(['/']);
            return;
        }
    });
  }
  range = (value) => { const a = []; for (let i = 0; i < value; ++i) { a.push(i + 1); } return a; };
  dimmers() {
    if (this.dimmer) {
      $('.special.cards .image').dimmer({
        on: 'hover'
      });
      this.dimmer = false;
    }
  }
  seen(UserID, UserNom) {
    this.route.navigate(['/', UserID, UserNom]);
}
getMetier(txt) {
  if (txt.length >= 10) {
    txt = txt.substr(0, 8) + '...';
  }
  return txt;
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
  initSlick() {
    if (this.oh) {
       $('.silde1').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '10px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '100px',
              slidesToShow: 4
            }
          }
        ]
      });
      this.oh = false;
    }
  }
  initSlick2() {
    if (this.oh2) {
       $('.silde2').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '10px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 4
            }
          }
        ]
      });
      this.oh2 = false;
    }
  }
}
