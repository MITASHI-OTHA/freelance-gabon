import { Myservices } from './../../assets/services/myservices';
import { AllprojetsService } from './../allprojets.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../accueil/models/Users';
import { Person } from '../accueil/models/person.model';
import { Routes, Router } from '@angular/router';
import { SetSessionService } from '../set-session.service';
declare var $, jQuery: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  users: User;
  myForm: FormGroup;
  person: Person;
  FirstTexte = 'Inscris-toi en 30 secondes !';
  FirstSecond = 'Et deccroche pleins de contrats !';
  value = '';
  secondes = 5;
  errorNameExist = false;
  disabledBtn = false;
  avatar = 'http://localhost/php-challenge/src/avatars/default.png';
  constructor(private fbuilder: FormBuilder, private services: AllprojetsService, private service: Myservices, private route: Router, private session: SetSessionService) {
    this.createform();
   }

  createform() {
    this.myForm = this.fbuilder.group({
      nom: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      status: [null, Validators.required]
    });

  }
  clearTime(element) {
    clearInterval(element);
    this.secondes = 5;
  }
  onSubmit() {
    const timeout = setInterval(() => {
      if (this.secondes > 0) {
        this.secondes --;
      } else {
        this.clearTime(timeout);
      }
    }, 1000);
    const formValue = this.myForm.value;
    this.disabledBtn = true;
    if (this.myForm.status === 'INVALID' || this.errorNameExist === true) {
      this.disabledBtn = false;
        return;
    }
    const New_User = new User(formValue.nom, formValue.email, formValue.password, formValue.status);
    this.services.createUser(New_User).then((response: Person) => {
      if (response.res === true) {
          $.amaran({
          'message'   : 'Bravo! Tu es inscris',
          'position'  : 'top right',
          'duration'  : 10000
        });
       const user = [
         {
          'id': response.id,
          'userName': formValue.nom,
          'email': formValue.email,
          'status': formValue.status,
          'avatar': this.avatar,
          'specialite': 'Aucune specialité',
          'skill': null,
          'tuto': null,
          'ville': null
        }
      ];
      setTimeout(() => {
        this.route.navigate(['/']);
     }, 3000);
       this.session.setSession(user);
      }
    });
  }
  checkname(value: String) {
    this.service.checkUser(value).then((rep: Person) => {
      if (rep.res === true) {
        this.errorNameExist = true;
      } else {
       this.errorNameExist = false;
      }
    });
  }
  onkeyup($event) {
    //console.log('key up', $event.target.value);
  }
  update(value: string) { this.value = value; }
  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
    $('.selection.dropdown')
    .dropdown();
     const specialiteControl = this.myForm.get('status');
      $('.item').click(function() {
      const val = $(this).attr('data-value');
      console.log(val);
      if (val === 'Recruteur') {
        this.FirstTexte = 'Inscris-toi Recruteur';
        this.FirstSecond = 'Et decouvre ton freelancer !';
      }
      specialiteControl.setValue(val);
      $('.specialite').val(val);
    });
  }

}
