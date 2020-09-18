import { Subject } from 'rxjs';
import { PagerService } from './../pages.service';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any, jQuery: any, noUiSlider: any, wNumb: any;
@Component({
  selector: 'app-all-freelancers',
  templateUrl: './all-freelancers.component.html',
  styleUrls: ['./all-freelancers.component.css']
})
export class AllFreelancersComponent implements OnInit {
  free: any;
  pager: { startIndex: any; endIndex: any; totalItems?: number; currentPage?: number; pageSize?: number; totalPages?: number; startPage?: number; endPage?: number; pages?: number[]; };
  pagedItems: any;
  sujet = new Subject();
  dimmer: any;
  pop: boolean;
  villes: any;
  categorie: any;
  competences: any;
  occurence = 12;
  private search: any = [
    {
      ville: '',
      categorie: '',
      prix: '',
      key: ''
    }
  ];
  constructor(private service: AllprojetsService, private pages: PagerService, private route: Router) { }

  ngOnInit() {
    var range = document.getElementById('range');
noUiSlider.create(range, {
  start: [0, 100000],
  tooltips: true,
  step: 1000,
  connect: true,
  range: {
      'min': 0,
      'max': 100000
  },
  format: wNumb({
    decimals: 0,
    suffix: ' Fcfa'
})
});
$('body').on('click', function(e: any) {
  $('.col-price').css({'display': 'none', 'transition': 'all .3s'})
})
$('.bnt-prix, .col-price').on('click', (e: any)=> {
  e.stopPropagation()
  $('.col-price').css({'display': 'block', 'transition': 'all .3s'})
})
    $('.list-push-freelancers li').on('click', function() {
      $('.list-push-freelancers li').removeClass('active')
      $(this).addClass('active')
    })
    this.service.getCategorie().then(res => {
      this.categorie = res;
  });
  this.service.getKeyword().then(response => {
    this.competences = response;
    $('.ui.search')
    .search({
      source: this.competences
    });
});
    jQuery(window).trigger('resize').trigger('scroll');
  // $('.parallax-windows').parallax({imageSrc: '../../assets/adult-blur-boy-428f361.jpg', overScrollFix: true});
    $('.parallax-windows').css('height', '100%' );
    $('.ville').dropdown({
      onChange: (text, value) => {
        const tab = [];
        this.search.ville = value;
          for (const i of this.pagedItems) {
                if (i.ville === this.search.ville || i.categorie === this.search.categorie) {
                  tab.push(i);
                }
              }
              if (tab.length > 0) {
                 this.free = tab;
                 this.setPage(1, 12);
              }
      }
    });
    $('.categorie').dropdown({
      onChange: (text, value) => {
        const tab = [];
        this.search.categorie = value;
          for (const i of this.pagedItems) {
                if (i.ville === this.search.ville || i.categorie === this.search.categorie) {
                  tab.push(i);
                }
              }
              if (tab.length > 0) {
                 this.free = tab;
                 this.setPage(1, 12);
              }
      }
    });
      this.sliders();
     const user = this.service.Freelancers;
     if (user === undefined) {
       this.service.getFreelancer().then((f) => {
        this.free = f;
        this.setPage(1, this.occurence);
       });
     } else {
       this.free = user;
       this.setPage(1, this.occurence);
     }
    this.getVille();
  }
  sliders() {
    const rangeSlider = function() {
        const slider = $('.range-slider');
        const  range = $('.range-slider__range');
        let  value = $('.range-slider__value');
      slider.each(function() {
        value.each(function() {
          value = $(this).prev().attr('value');
          $(this).html(value);
        });
        range.on('input', function() {
          $(this).next(value).html(this.value);
          $('.range-slider__value').html(this.value);
        });
      });
    };
    rangeSlider();
  }
  getVille() {
    this.service.getVille().then(v => {
      this.villes = v;
    });
  }
  myalert() {
    //console.log('texte ', $('.text').val());
  }
  All() {
    $('.col-all-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-all-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.pagedItems = this.free.slice(0, 12);
    }, 1000)
    this.pager = this.pages.getPager(this.free.length, 1, 12);
  }
  byRec() {
    $('.col-all-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-all-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.pagedItems = this.free.slice(0, 4);
    }, 1000)
    this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
  }
  byQualif() {
    $('.col-all-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-all-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.pagedItems = this.free.filter(f =>  {return parseInt(f.expsp.length) >= 4} ).slice(0, 12);
    }, 1000)
    this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
  }
  byExp() {
    $('.col-all-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-all-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.pagedItems = this.free.filter(f =>  {return parseInt(f.experience) >= 5} ).slice(0, 12);
      this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
    }, 1000)
  }
  byBoost() {
    $('.col-all-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-all-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.pagedItems = this.free.filter(f =>  {return parseInt(f.evaluation) >= 3} ).slice(0, 12);
    }, 1000)
    this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
  }
  getStatusText(sts: any, name: string) {
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
  popup() {
    if (this.pop) {
      $('.myh').popup();
      this.pop = false;
    }
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
    setPage(page: number, d: number) {
      this.pager = this.pages.getPager(this.free.length, page, d);
      this.pagedItems = this.free.slice(this.pager.startIndex, this.pager.endIndex + 1);
      //console.log('pages items ', this.pagedItems , 'pager ', this.pager);
      this.dimmer = true;
      this.pop = true;
      window.scrollTo(0, 0);
  }
  paginate () {
    this.sujet.next(this.pagedItems);
  }
  controlName(nom: String) {
    if (nom.length >=15) {
      return nom.substr(0, 12) + '...';
    } else {
      return nom;
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
}

