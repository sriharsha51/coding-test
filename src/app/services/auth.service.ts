import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  constructor() { }

  setAuth() {
    sessionStorage.setItem('userLoggedIn','true');
  }

  checkAuth() {
    return sessionStorage.getItem('userLoggedIn') === 'true';
  }

  getAuth() {
    return sessionStorage.getItem('userLoggedIn');
  }

}
