import { ProfilUserComponent } from './../profil-user/profil-user.component';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $, Quill: any;
@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.css']
})
export class ProfilDetailComponent implements OnInit {
  competence: any;
  categorie: any;
  message;
  color;
  quill;
  apropos;
  headInfos;
  footerInfos;
  head;
  price = 'heure';
  constructor(private service: AllprojetsService) {
   }

  ngOnInit() {
    $('.ui.selection, .dropdown.item')
    $('.ui.dropdown').dropdown()
    .dropdown({
        maxSelections: 4
    });
    this.service.getCompetence().then(response => {
          this.competence = response;
    });
    this.service.getCategorie().then(res => {
        this.categorie = res;
    });
    const options = {
      placeholder: 'Dis ce que tu peux offrir à tes clients.',
      theme: 'snow'
    };
     this.quill = new Quill('#editor', options);
     $('.btn-change-photo').on('click', function() {
      $('.photo').click();
    });
  }
  onSubmit(form: NgForm) {
    const texte = $('.ql-editor');
    const textes = texte[0].innerHTML;
    const word = texte[0].innerText;
    if (word.length <= 1) {
      this.apropos = true;
      return;
    }
    this.apropos = false;
    const editor_content = this.quill.container.innerHTML;
    const email = JSON.parse(this.service.getLocal().getItem('user'))[0].email;
    const profil = new Profiler(form.value.titre, form.value.prix + ' Fcfa /' +  $('.unite').html(), form.value.maxCount, form.value.categorie, form.value.experience, textes, email);
    this.service.saveForm2(profil).then((rep: any) => {
      if (rep.percent) {
        /* Je fais le traitement de la barre de prog pour la mettre à jour */
          this.headInfos = 'Mis-à-jour reussi';
          this.footerInfos = 'Vos informations ont été mis-à-jour !';
          $.amaran({
            'message'   : 'Tu as modifié tes infos',
            'position'  : 'bottom right',
            'duration'  : 10000
          });
          $('.succes--').fadeIn().fadeOut(10000);
          //console.log('yess on est là ', rep);
          const maj = JSON.parse(this.service.getLocal().getItem('user'));
          const perc = maj[0].percent = rep.percent;
          this.service.getLocal().setItem('user', JSON.stringify(maj));
          const req = this.service.setLdBar();
          const t = req.percent;
          this.head = req.head;
          this.message = req.message;
          this.color = req.color;
          $('#bar').progress({
              percent: t
            });
      }

    });
  }
  prices(elm) {
    //console.log('click ', elm.srcElement.innerHTML);
    this.price = elm.srcElement.innerHTML;
  }
}
export class Profiler {
  constructor(public titre, public prix, public competence, public categorie, public experience, public texte, public email) {}
}
