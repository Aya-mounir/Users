import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: any;
  encrypted!: any;
  decrypted!: any;
  pass: any = 'D60DCA07-7C3D-4C95-978E-3FE597ADE0D9';
  private authListener = new Subject<boolean>();
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  isLoggedIn() {
    return this.authListener.asObservable();
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/auth/login', data);
  }
  getUserData(user: any) {
    this.user = user;
    console.log(user);
    this.encrypted = CryptoJS.AES.encrypt(
      user.token == undefined ? '' : user.token.trim(),
      this.pass == undefined ? '' : this.pass.trim()
    ).toString();
    console.log(this.encrypted);
    this.decrypted = CryptoJS.AES.decrypt(
      this.encrypted == undefined ? '' : this.encrypted.trim(),
      this.pass == undefined ? '' : this.pass.trim()
    ).toString(CryptoJS.enc.Utf8);
    console.log('decrypted', this.decrypted);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', this.encrypted);
  }
}
