import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn'));

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value.toString());
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn'));
  }

  account() {
    return this.http.get(environment.apiUrl + '/account', { withCredentials: true });
  }

  logOut(logout) {
    let data = {
      "logout": logout,
    }
    return this.http.post(environment.apiUrl + '/logout', data, { withCredentials: true });
  }
}