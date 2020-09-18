import { AllprojetsService } from './allprojets.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    Auth: boolean;
    private id;
    private nom;
    private avatar;
    private specialite;
    private email;
    sujet = new Subject();
    constructor(private service: AllprojetsService, private route: Router) {}
    getUser() {
        const user = JSON.parse(this.service.getLocal().getItem('user')) || [];
        //console.log('getLocal ', this.service.getLocal().getItem('user'));
        if (user.length <= 0) {
          this.Auth = false;
          return false;
        } else {
            const data = [
                {
                  id: user[0].id,
                  nom: user[0].userName,
                  avatar: user[0].avatar,
                  specialite: user[0].specialite,
                  email: user[0].email,
                  skill: user[0].skill,
                  ville: user[0].ville
                }
              ];
            this.service.putInfosUser(data);
            this.Auth = true;
            return data;
        }
    }
    connected() {
       return this.Auth = true;
    }
    logout() {
        this.service.getLocal().removeItem('user');
        this.service.getLocal().removeItem('projets');
        const store =  JSON.parse(localStorage.getItem('projets')) || [];
        if (store.length > 0) {
           localStorage.removeItem('projets');
           }
        this.Auth = false;
        this.route.navigate(['/']);
    }
    getAuth() {
      return  this.sujet.next(this.Auth);
    }
}
