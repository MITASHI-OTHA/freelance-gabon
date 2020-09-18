import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetSessionService {
  local = sessionStorage;
  constructor() { }
  setSession(data: any) {
    this.local.setItem('user', JSON.stringify(data));
  }
  putLocal() {
    this.local = localStorage;
  }
  removeLocal() {
    this.local = sessionStorage;
  }
}
