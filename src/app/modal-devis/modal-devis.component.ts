import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllprojetsService } from '../allprojets.service';
declare var $: any;
@Component({
  selector: 'app-modal-devis',
  templateUrl: './modal-devis.component.html',
  styleUrls: ['./modal-devis.component.css']
})
export class ModalDevisComponent implements OnInit {
  @Input() idProj;
  inactive;
  warn;
  message: String;
  constructor(private service: AllprojetsService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.inactive = true;
  //console.log('les données ', form.value, 'idProj ', this.idProj);
  const idUser = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
  const devis = new Devis(form.value.prix, form.value.duree + ' ' + form.value.temps, form.value.note, this.idProj, idUser);
  this.service.setDevis(devis).then((response: any) => {
        this.inactive = false;
        if (response.res === false ) {
            this.warn = true;
            this.message = 'Désolé, tu as dèjà envoyé un devis pour ce projet !';
        } else {
          this.warn = false;
          this.message = '';
          setTimeout(() => {
              $('#modalDevis').modal('hide');
          }, 1000);
        }
  });
 }
}
export class Devis {
  constructor(public prix, public temps, public note, public idP, public idUser) {}
}
