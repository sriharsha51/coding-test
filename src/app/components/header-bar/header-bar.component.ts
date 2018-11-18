import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  username: string;
  isLoggedIn: boolean;
  routeParam: string;
  inLoginPage: boolean;
  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit() {
    this._router.events.forEach((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.routeParam = event.url;
        this.inLoginPage = false;
        if(!(this.routeParam === '/login')) {
          this.username = this._usersService.getUsername();
        } else if(this.routeParam === '/login') {
            this.inLoginPage = true;
        }
      }
    })
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}
