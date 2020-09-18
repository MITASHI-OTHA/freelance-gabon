import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllprojetsService } from '../allprojets.service';
import { SetSessionService } from '../set-session.service';
declare var $, jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  accepte = false;
  error = false;
  disabled;
  constructor(private fb: FormBuilder, private service: AllprojetsService, private session: SetSessionService, private route: Router) {
    this.createForm();
  }
 createForm() {
   this.myform = this.fb.group({
     email: [null, [Validators.required, Validators.email]],
     password: [null, Validators.required]
   });
 }
 check() {
   if ($('.checkbox').hasClass('checked')) {
      this.accepte = true;
   } else {
     this.accepte = false;
   }
 }
  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
    $('.ui.checkbox')
      .checkbox();
  }
  submit() {
    const form = this.myform.value;
    this.disabled = true;
    if ($('.checkbox').hasClass('checked')) {
      this.session.putLocal();
    } else {
      this.session.removeLocal();
    }
        this.accepte = true;
        const person = new Loger(form.email, form.password);
        this.service.login(person).then((pers: Freelancer) => {
          if (pers.status === false) {
            $.amaran({
              content: {
                  bgcolor: '#ff4133',
                  color: '#fff',
                  message: 'Désolé votre email ou mot de passe est incorrecte !',
                 },
              theme: 'colorful',
              position: 'top right',
              delay: 5500
          });
          this.error = true;
          this.disabled = false;
            return;
          }
            this.session.setSession(pers);
            $.amaran({
              'message'   : 'Tu es connecté !',
              'position'  : 'top right',
              'duration'  : 10000
            });
            this.disabled = false;
            setTimeout(() => {
               this.route.navigate(['/']);
            }, 3000);
      });
  }
}
export class Loger {
  constructor (public email, public password) {}
}
export class Freelancer {
    constructor(public id, public nom, public avatar, public status, public email, public specialite, public inscription, public skill) {}
}
