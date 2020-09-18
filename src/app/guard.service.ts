import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './AuthService';
declare var NProgress: any;
@Injectable()
export class GuardService implements CanActivate, OnInit {
  entete: EnteteComponent;
  constructor (private auth: AuthService, private route: Router) {}
  ngOnInit() {
  }
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.Auth) {
        this.route.navigate(['/']);
        NProgress.remove();
        return false;
      } else {
        return true;
      }
  }
}


