import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Myservices {
    constructor(private http: HttpClient) {}
    name;
   headers = new HttpHeaders({'Content-Type': 'application/json'});
   Url = 'http://localhost/php-challenge/checkUser.php';

   checkUser(userName: any) {
       const users = new Promise( (resolve, reject) => {
            this.http.post(this.Url, userName, {headers: this.headers})
            .toPromise()
            .then(res => {
                //console.log('res', res);
                this.name = res;
                resolve(this.name);
            },
            error => {
                //console.log('une erreur s\'est produit', error);
            }
        );
    });
    return users;
 }
}
