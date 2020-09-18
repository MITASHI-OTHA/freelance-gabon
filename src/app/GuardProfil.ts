import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './AuthService';
@Injectable()
export class GuardProfil implements CanActivate {
    constructor (private auth: AuthService, private route: Router) {}
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.Auth) {
          return true;
        } else {
          this.route.navigate(['/']);
        }
    }
  }
