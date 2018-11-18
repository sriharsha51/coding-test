import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  domain: string;
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${environment.domain}users`);
  }

  updateUser(id, user) {
   return this._http.put(`${environment.domain}users/${id}`, user);
  }

  deleteUser(id) {
    return this._http.delete(`${environment.domain}users/${id}`);
  }

  setUsername(name) {
    sessionStorage.setItem('username', name);
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

  getCurrentUser(id) {
    return this._http.get(`${environment.domain}users/${id}`);
  }
}
