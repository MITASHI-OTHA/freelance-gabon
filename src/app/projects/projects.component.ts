import { PagerService } from './../pages.service';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FilterPipe} from '../filter.pipe';
declare var $: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  subcription: Subscription;
  allprojets: any;
  freelancer: any;
  @Input() metier;
  @Input() appareilName: String;
  yes;
  pager: any = {};
  pagedItems: any[];
  itemFree;
  btnAll;
  pop = true;
  fakeDimmer = true;
  gride = true;
  Titles = "Freelancers recents";
  myObservable = new Observable();
  private ObjectRibon: any = [
    {
      id: 0,
      color: '#fff',
      background: '#fff',
      texte: ''
    },
    {
      id: 1,
      color: '#bdffbe',
      background: '#08ff1214',
      texte: 'Cette mission est cloturé'
    },
    {
      id: 2,
      color: '#ffbfa8',
      background: '#fff5f5',
      texte: 'Cette mission n\'est plus valable'
    }
  ];
  brrr = true;
  pageFree;
  constructor(private projets: AllprojetsService, private pages: PagerService) { }

  ngOnInit() {
    // $('.list-push-freelancers li').on('click', function() {
    //   $('.list-push-freelancers li').removeClass('active')
    //   $(this).addClass('active')
    // })
    this.projets.getProjets().then((rep: any) => {
    this.allprojets = rep;
    this.setPage(1);
    this.fakeDimmer = false;
    sessionStorage.setItem('projets', JSON.stringify(this.allprojets));
    });
    this.projets.getFreelancer().then((res: any) => {
    this.freelancer = res;
    this.pageFree = this.pages.getPager(this.freelancer.length, 1, 4);
    this.itemFree = this.freelancer.slice(this.pageFree.startIndex, this.pageFree.endIndex + 1);
    console.log('all freelancers ', this.freelancer, 'Math ceil ', Math.ceil(this.freelancer.length/4), "startIndex ", this.pageFree.startIndex, "endIndex ", this.pageFree.endIndex)
    console.log('filtre ', this.freelancer.filter(f =>  {return parseInt(f.experience) >= 5} ) )
    res.length >= 4 ? this.btnAll = true : this.btnAll = false;
    this.pop = true;
    });
  }
  byRec() {
    this.Titles = "Freelancers recents"
    $('.col-slice-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-slice-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.itemFree = this.freelancer.slice(0, 4);
    }, 1000)
  }
  byQualif() {
    this.Titles = "Les plus qualifiés"
    $('.col-slice-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-slice-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.itemFree = this.freelancer.filter(f =>  {return parseInt(f.expsp.length) >= 4} ).slice(0, 4)
    }, 1000)
    
  }
  byExp() {
    this.Titles = "Les plus experimentés"
    $('.col-slice-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-slice-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.itemFree = this.freelancer.filter(f =>  {return parseInt(f.experience) >= 5} ).slice(0, 4)
    }, 1000)
  }
  byBoost() {
    this.Titles = "Les plus Boostés"
    $('.col-slice-free')
    .removeClass('fadeIn')
    .addClass('animated fadeOut')
    setTimeout(()=> {
      $('.col-slice-free')
      .removeClass('fadeOut')
      .addClass('animated fadeIn')
      this.itemFree = this.freelancer.filter(f =>  {return parseInt(f.evaluation) >= 3} ).slice(0, 4)
    }, 1000)
  }
  getMetier(txt) {
    if (txt.length >= 10) {
      txt = txt.substr(0, 8) + '...';
    }
    return txt;
  }
  liste() {
    this.gride = false;
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
  popup() {
    if (this.pop) {
      $('.myh').popup();
      this.pop = false;
    }
  }
  getRibon(etat) {
    etat = parseInt(etat, 0);
   const rib = this.ObjectRibon.find((obj) => {
        return obj.id === etat;
    });
  return {
      couleur: rib.color,
      back: rib.background,
      texte: rib.texte
   };
  }
  controlName(nom: String) {
    if (nom.length >=15) {
      return nom.substr(0, 12) + '...';
    } else {
      return nom;
    }
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pages.getPager(this.allprojets.length, page);
    // get current page of items
     this.pagedItems = this.allprojets.slice(this.pager.startIndex, this.pager.endIndex + 1);
    //console.log('pages items ', this.pagedItems , 'pager ', this.pager);
}
  lengths = (x) => {
     const t = Object.keys(x).length;
     const tab = [];
     for (let i = 0; i < t; i++) {
          let comp = x[i];
          const lg = x[i].length;
          if (lg >= 15) {
            comp = x[i].toString().substr(0, 6) + '...';
          }
          tab.push(comp);
        }
      return tab;
  }
   range = (value) => { const a = []; for (let i = 0; i < value; ++i) { a.push(i + 1); } return a; };
   getOneProjet(id: number) {
    const ms =  this.projets.getOneProjet(id);
    //console.log('voila', ms);
   }
}
