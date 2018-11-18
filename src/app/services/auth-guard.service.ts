import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router, private _authService: AuthService) { }

  canActivate(state: RouterStateSnapshot) {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if(this._authService.checkAuth()) { 
      return true;
    } else {
      this._authService.redirectUrl = url;
      this._router.navigate(['/login']); // redirecting the user if nthe user is not logged in.
      return false;
    }
  }
}
