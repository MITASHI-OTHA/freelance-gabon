import { User } from './accueil/models/Users';
import { Routes, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from './profil.model';
import { Form2 } from './profil-recruteur/profil-recruteur.component';
@Injectable({
  providedIn: 'root'
})
export class AllprojetsService {
  Info: any = [{
    avatar: null,
    nom: null,
    email: null,
    id: null,
    skill: null,
    specialite: null
  }];
  subjet =  new Subject();
  subject2 = new Subject();
  private Mesprojets: any;
  Freelancers: any[];
  private Recruteur: any;
  private devis: any;
  private allDevis: any;
  infosUser: any =  [{
    avatar: null,
    nom: null,
    email: null,
    id: null,
    skill: null,
    specialite: null,
    percent: null,
    ville: null
  }];
  private blob: any;
  constructor(private http: HttpClient, private route: Router) {
   }
  link = 'http://localhost/php-challenge/src/avatars/';
  Url = 'http://localhost/php-challenge/projets.php';
  Url2 = 'http://localhost/php-challenge/getfre.php';
  Url3 = 'http://localhost/php-challenge/getRec.php';
  Url4 = 'http://localhost/php-challenge/getFree.php';
  Url5 = 'http://localhost/php-challenge/create.php';
  Url6 = 'http://localhost/php-challenge/profil1.php';
  Url7 = 'http://localhost/php-challenge/login.php';
  Url8 = 'http://localhost/php-challenge/skill.php';
  Url9 = 'http://localhost/php-challenge/update-avatars.php';
  Url10 = 'http://localhost/php-challenge/update-profil.php';
  Url11 = 'http://localhost/php-challenge/getPostule.php';
  Url12 = 'http://localhost/php-challenge/setDevis.php';
  Url13 = 'assets/villes.json';
  Url14 = 'http://localhost/php-challenge/postRec1.php';
  Url15 = 'http://localhost/php-challenge/postProjet.php';
  Url16 = 'http://localhost/php-challenge/getMyProjet.php';
  Url17 = 'http://localhost/php-challenge/TerminerProjet.php';
  Url18 = 'http://localhost/php-challenge/AbandProjet.php';
  Url19 = 'http://localhost/php-challenge/suppProjet.php';
  Url20 = 'http://localhost/php-challenge/setNotif.php';
  Url21 = 'http://localhost/php-challenge/boot.php';
  Url22 = 'http://localhost/php-challenge/vueTuto.php';
  header = new HttpHeaders({'Content-Type': 'application/json'});
  Blobheader = new HttpHeaders({'ContentType': 'false', 'processData': 'false'});
  eval: any;
  error = false;
  stores: any;
  setnotif(devis: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url20, devis, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
});
return req;
  }
  boots(idRec: any, idFree: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url21, {idFree: idFree, idRec: idRec} , {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
});
return req;
  }
  setDevis(devis: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url12, devis, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
});
return req;
  }
  vueTuto(data: any) {
    console.log('dataaa ', data)
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url22, data, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
});
return req;
  }
  Terminerproj(id: any, etat: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url17, {id: id, etat}, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
      });
    return req;
  }
  suppproj(id: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url19, {id: id}, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
      });
    return req;
  }
  getMyproj(id: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url16, {id: id}, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
      });
    return req;
  }
  postRec1(forms: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url14, forms, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
      });
    return req;
  }
  saveForm2(profiler: any) {
    const req = new Promise((resolve, reject) => {
      this.http.post(this.Url10, profiler, {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          const lb = rep.percent;
          const ks = JSON.parse(sessionStorage.getItem('user'));
          ks[0].percent = lb;
          sessionStorage.setItem('user', JSON.stringify(ks));
          resolve(rep);
      });
});
return req;
  }
  getProjectPostule(id) {
    const get = new Promise((resolve, reject) => {
      this.http.post(this.Url11, id , {headers: this.header})
      .toPromise()
      .then((rep: any) => {
          resolve(rep);
      });
      });
    return get;
  }
  setLdBar() {
    const req = JSON.parse(sessionStorage.getItem('user'));
    const perc = req[0].percent;
    const percent  = perc === null ? 0 : perc;
    let head = null;
    let message = null;
    let color = null;
    switch (true) {
        case percent >= 30 && percent < 100:
        head = 'Il te reste des infos à saisir';
        message = 'Si tu veux être visible sur le site, tu dois completer ton profil à 100%';
        color = '#ffff0047';
        break;
        case percent >= 100:
        head = 'Tu es visible sur le site';
        message = 'Ton profil est rempli';
        color = '#cbffa5';
        break;
        default:
        head = 'Tu n\'es pas encore visible';
        message = 'Si tu veux être visible sur le site, tu dois completer ton profil à 100%';
        color = '#f5e4e2';
    }
    return {
      percent: percent,
      head: head,
      message: message,
      color: color
    };
  }
  saveForm1(users: Profil) {
    const req = new Promise((resolve, reject) => {
          this.http.post(this.Url6, users, {headers: this.header})
          .toPromise()
          .then((rep: any) => {
              //console.log('reponse formulaire 1', rep);
              this.infosUser[0] = rep;
              resolve(rep);
          });
    });
    return req;
  }
  getCategorie() {
    const file = new Promise((resolve, reject) => {
      this.http.get('assets/categorie.json')
      .toPromise()
      .then(res => {
          resolve(res);
      });
  });
  return file;
  }
  getCompetence () {
    const file = new Promise((resolve, reject) => {
        this.http.get('assets/file.json')
        .toPromise()
        .then(res => {
            resolve(res);
        });
    });
    return file;
  }
  getKeyword () {
    const file = new Promise((resolve, reject) => {
        this.http.get('assets/keywords.json')
        .toPromise()
        .then(res => {
            resolve(res);
        });
    });
    return file;
  }

  searchCompetence () {
    const file = new Promise((resolve, reject) => {
        this.http.get('assets/searchCompetence.json')
        .toPromise()
        .then(res => {
            resolve(res);
        });
    });
    return file;
  }
  updateAvatar(email, avatars, status) {
    const skl = new Promise((resolve, rej) => {
      this.http.post(this.Url9, {email: email, avatar: avatars, status: status}, {headers: this.header})
      .toPromise()
      .then(response => {
        resolve(response);
      });
    });
    return skl;
  }
  skill(email) {
    const skl = new Promise((resolve, rej) => {
      this.http.post(this.Url8, {email: email}, {headers: this.header})
      .toPromise()
      .then(response => {
        resolve(response);
      });
    });
    return skl;
  }
  login(user) {
    const users = new Promise((resolve, reject) => {
          this.http.post(this.Url7, user , {headers: this.header})
          .toPromise()
          .then(response => {
            resolve(response);
          },
          error => {
            reject('une erreur est arrivée' + error);
          }
        );
    });
    return users;
  }
  putInfosUser(data) {
    this.infosUser = data;
  }
  getInfosUser() {
   this.subjet.next(this.infosUser);
  }
  getProjets() {
    const rek = new Promise((resolve, reject) => {
        this.http.post(this.Url, { headers: this.header })
        .toPromise()
        .then(rep => {
          this.Mesprojets = rep;
          resolve(this.Mesprojets);
        }, error => {
          reject('erreur fatale ' + error);
        });
    });
    return rek;
  }
  createUser(formulaire: User) {
  const requete = new Promise((resolve, reject) => {
      this.http.post(this.Url5, formulaire, {headers: this.header})
      .toPromise()
      .then(res => {
          //console.log('response', res);
          resolve(res);
      }, error => {
          //console.log('erreur', error);
      });
    });
    return requete;
}
/* Envoie de l'image de profil format Blob */
  sendBlob(data) {
    const urlBlob = 'http://localhost/php-challenge/postImage.php';
    const sending = new Promise((resolve, reject) => {
      this.http.post(urlBlob, data, {headers: this.Blobheader})
      .toPromise()
      .then((response: any) => {
        this.blob = response;
        this.infosUser[0].avatar = this.link + response.name;
        resolve(this.blob);
      },
      error => {
        //console.log('impossible d\'envoyer l\'image', error);
        this.error = true;
      }
    );
    });
    return sending;
  }
  /* fin */
  /* subscribtion à l'evenement */
    getBlob () {
      this.subject2.next(this.blob);
    }
  /* fin */
/* Subscription 0 lerreur */
Geterror() {
 return this.subjet.next(this.error);
}
/* fin */
  getOneProjet(id: number) {
    const projects = JSON.parse(sessionStorage.getItem('projets')) || [];
    const pj = projects.length <= 0 ? undefined : projects;
    const a = typeof(this.Mesprojets);
    if (typeof(pj) === 'undefined' || pj === undefined) {
        this.route.navigate(['/']);
        return;
    } else {
      this.Mesprojets = pj;
    }
   const oneProjet = this.Mesprojets.find((proj) => {
      return proj.id === id;
   });
    return oneProjet;
  }
  getImage() {
    const q = new Promise((resolve, reject) => {
      this.http.get('assets/images.json', {headers: this.header})
      .toPromise()
      .then(data => {
        resolve(data);
      }, error => {
        //console.log('impossible de recuperer les images en cache', error);
      }
    );
    });
    return q;
  }
  getDevisFree(id: number) {
    const q = new Promise((resolve, reject) => {
      this.http.post(this.Url4, {id: id}, {headers: this.header})
      .toPromise()
      .then(data => {
        this.devis = data;
        resolve(this.devis);
      }, error => {
        //console.log('une erreur s\'est produit :() ', error);
      }
    );
    });
    this.subjet.next(q);
    return q;
  }
  getVille() {
    const reqVille = new Promise((resolve, reject) => {
      this.http.get(this.Url13, {headers: this.header})
      .toPromise()
      .then(response => {
        resolve(response);
      }, error => {
        reject('impossible de recuperer les villes ' + error);
      }
    );
    });
    return reqVille;
  }
  searchVille() {
    const reqVille = new Promise((resolve, reject) => {
      this.http.get('assets/searchVille.json', {headers: this.header})
      .toPromise()
      .then(response => {
        resolve(response);
      }, error => {
        reject('impossible de recuperer les villes ' + error);
      }
    );
    });
    return reqVille;
  }
  getLocal() {
    const store =  JSON.parse(sessionStorage.getItem('user')) || [];
    if (store.length > 0) {
        this.stores = sessionStorage;
    } else {
      this.stores = localStorage;
    }
    return this.stores;
   }
   sendForm2 (form2: Form2) {
      const reqEp = new Promise((resolve, reject) => {
        this.http.post(this.Url15, form2 , {headers: this.header} )
        .toPromise()
        .then(response => {
          resolve(response);
        }, error => {
          reject('il a eu un ptit problème 0 _ o' + error);
        }
      );
    });
    return reqEp;
   }
  getCurrentRec(id: number) {
    const reqEp = new Promise((resolve, reject) => {
      this.http.post(this.Url3, {id: id} , {headers: this.header} )
      .toPromise()
      .then(response => {
        this.Recruteur = response;
        resolve(this.Recruteur);
      }, error => {
        // console.log('il a eu un ptit problème 0 _ o', error);
      }
    );
    });
    return reqEp;
  }
  getFreelancer() {
    const free = new Promise((resolve, reject) => {
      this.http.post(this.Url2, { headers: this.header})
      .toPromise()
      .then((frees: any[]) => {
        this.Freelancers = frees;
        // console.log('les gens ', frees);
        resolve(this.Freelancers);
      }, error => {
        reject('impossible de recuperer les gens LoL ' + error);
      }
    );
    });
    return free;
  }
  subcription () {
    this.subjet.next(this.Mesprojets);
  }
}
export class InfosUser {
  constructor(public avatar: any, public email: any, public id: any, public nom: any, public skill: any, public specialite: any, public ville: any) {}
}
