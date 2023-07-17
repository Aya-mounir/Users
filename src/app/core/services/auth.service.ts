import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!:any;
  private authListener = new Subject<boolean>();
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  isLoggedIn() { return this.authListener.asObservable(); }
  login(data: any):Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/auth/login', data);
  }
  getUserData(user:any){
    this.user=user;
    localStorage.setItem('token', user.token);

    this.authListener.next(true);


  }

}
