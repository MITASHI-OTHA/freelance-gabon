import { Component, OnInit } from '@angular/core';
import { AllprojetsService } from '../allprojets.service';
declare var $: any;
@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
  headInfos;
  footerInfos;
  projets;
  empty;
  msg;
  constructor(private service: AllprojetsService) { }

  ngOnInit() {
    setTimeout(() => {
      $('.empt').css({'height': $('.col-info-warn').height() + 'px', 'display': 'flex'});
    }, 3000);
    //console.log('height ', $('.col-info-warn').height());
    const  getEmail = JSON.parse(this.service.getLocal().getItem('user'));
    const getEmails = getEmail[0].email;
    const getId = getEmail[0].id;
    const tab = [{
      id: getId,
      email: getEmails
    }];
    this.service.getProjectPostule(tab).then((rep: any) => {
          //console.log('rep details ', rep);
          if (rep.response === false) {
            this.empty = true;
            this.msg = 'Tu n\'as pas encore proposer de devis';
          } else {
            this.empty = false;
            this.projets = rep;
          }
    });
  }
}
